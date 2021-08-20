import { Client, Collection } from "discord.js"
import path from 'path';
import { readdirSync } from "fs";

import { Command, Doc, Event } from "../Interfaces";
import Log from '../Utils/log';
import Dep from "../Utils/Dep";
require('dotenv').config()


class ExtendedClient extends Client {
    public commands: Collection<string, Command> = new Collection();
    public slashCommands = new Collection();
    public docs: Collection<string, Doc> = new Collection();
    public events: Collection<string, Event> = new Collection();
    public aliases: Collection<string, Command> = new Collection();

    public async init() {
        Dep.add(Client, this)
        this.login(process.env.TOKEN);

        // Commands
        // const commandPath = path.join(__dirname, "..", "Commands");
        // Log.info(`Loaded ${readdirSync(commandPath).length} Commands`, "handler")
        // readdirSync(commandPath).forEach((dir) => {
        //     const commands = readdirSync(`${commandPath}/${dir}`).filter((file) => file.endsWith('.ts'));

        //     for (const file of commands) {
        //         const { command } = require(`${commandPath}/${dir}/${file}`);
        //         this.commands.set(command.name, command);

        //         if (command.aliases?.length) {
        //             command.aliases.forEach((alias) => {
        //                 this.aliases.set(alias, command)
        //             })
        //         }
        //     }
        // })

        // SlashCommand
        const arrayOfSlashCommands = [];
        const slashCommandPath = path.join(__dirname, "..", "SlashCommands");
        Log.info(`Loaded ${readdirSync(slashCommandPath).length} Slash Commands`, "handler")
        readdirSync(slashCommandPath).forEach((dir) => {
            const commands = readdirSync(`${slashCommandPath}/${dir}`).filter((file) => file.endsWith('.ts'));
            for (const file of commands) {
                const { slashCommand } = require(`${slashCommandPath}/${dir}/${file}`);
                arrayOfSlashCommands.push(slashCommand)
                this.slashCommands.set(slashCommand.name, slashCommand)
            }
        })

        // Events
        const eventPath = path.join(__dirname, "..", "Events");
        Log.info(`Loaded ${readdirSync(eventPath).length} Events`, "handler");
        readdirSync(eventPath).forEach(async (file) => {
            const { event } = await import(`${eventPath}/${file}`);
            this.events.set(event.name, event);
            this.on(event.name, event.run.bind(null, this));
        })

        // Documents
        const docFile = path.join(__dirname, "..", "Docs");
        Log.info(`Loaded ${readdirSync(docFile).length} Docs`, "handler");
        readdirSync(docFile).forEach(async (file) => {
            const { doc } = await import(`${docFile}/${file}`);
            this.docs.set(doc.name, doc)
        })
    }
}

export default ExtendedClient
import Client from "../Client/index";
import { CommandInteraction } from "discord.js";

interface Run {
    (client: Client, interaction: CommandInteraction, args: string[]);
}

export interface SlashCommand {
    name: string;
    description: string;
    default: boolean,
    defaultPermission?: boolean,
    options?: {
        name: string,
        description: string,
        type: number,
        required: boolean,
        choices?: {
            name: string,
            value: string,
        }[]
    }[]
    run: Run
}
import { SlashCommand } from "../../Interfaces";

export const slashCommand: SlashCommand = {
    name: 'register',
    description: "register slash commands",
    default: true,

    run: async (client:any, interaction, args) => {
        interaction.followUp("registering slash commands")
        await client.applications.commands.set(client.slashCommands)
        interaction.editReply("registred")
    }
}
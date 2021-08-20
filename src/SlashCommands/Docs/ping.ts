import { SlashCommand } from "../../Interfaces";

export const slashCommand: SlashCommand = {
    name: 'ping',
    description: "ws ping",
    default: true,

    run: async (client, interaction, args) => {
        interaction.followUp("hey! hi")
    }
}
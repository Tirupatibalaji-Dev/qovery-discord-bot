import { Event, SlashCommand } from "../Interfaces"
import Log from "../Utils/log"

export const event: Event = {
    name: "interactionCreate",
    run: async (client, interaction) => {
        if (!interaction.isCommand())
            return;

        await interaction.deferReply({ ephemeral: true }).catch((error) => Log.error(error, "interaction Create"))

        const cmd = client.slashCommands.get(interaction.commandName)

        if (!cmd)
            return interaction.followUp({ content: "An error has occured" });

        const args = [];
        (cmd as SlashCommand).run(client, interaction, args)
    }
}
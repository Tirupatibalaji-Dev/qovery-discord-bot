import { Event, SlashCommand } from "../Interfaces"
import Log from "../Utils/log"
import SelectMenu from "../Utils/SelectMenu";

export const event: Event = {
    name: "interactionCreate",
    run: async (client, interaction) => {
        if (!interaction.isCommand())
            return ;

        await interaction.deferReply({ ephemeral: true }).catch((error) => Log.error(error, "interaction Create"))

        const cmd = client.slashCommands.get(interaction.commandName)

        if (!cmd)
            return interaction.followUp({ content: "An error has occured" });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        (cmd as SlashCommand).run(client, interaction, args)
    }
}
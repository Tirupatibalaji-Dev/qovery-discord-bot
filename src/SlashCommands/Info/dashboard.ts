import { MessageActionRow, MessageEmbed, MessageSelectMenu } from "discord.js";
import { SlashCommand, Doc } from "../../Interfaces";
import SelectMenu from "../../Utils/SelectMenu";
export const slashCommand: SlashCommand = {
    name: 'dashboard',
    description: "Get qovery dashboard url",
    default: true,

    run: async (client, interaction, args) => {
        interaction.followUp("Deploy Your app Now [Go to Qovery](https://discord.com/api/oauth2/authorize?client_id=878146604362776616&scope=applications.commands)")
}
}
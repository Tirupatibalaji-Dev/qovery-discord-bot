import { MessageActionRow, MessageEmbed, MessageSelectMenu } from "discord.js";
import { SlashCommand, Doc } from "../../Interfaces";
import SelectMenu from "../../Utils/SelectMenu";
export const slashCommand: SlashCommand = {
    name: 'invite',
    description: "Invite Qovery Official Docs Bot",
    default: true,

    run: async (client, interaction, args) => {
        interaction.followUp("get qovery docs in your server [invite](https://discord.com/api/oauth2/authorize?client_id=878146604362776616&scope=applications.commands)")
}
}
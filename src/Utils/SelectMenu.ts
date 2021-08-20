import { Client, Interaction, MessageEmbed } from "discord.js";

export default class SelectMenu {
    static select(interaction: any, client: any) {
        client.docs.map((doc) => {
            if (doc.path === interaction.values[0]) {
                const embed = new MessageEmbed()
                    .setTitle(`__${doc.name}__`)
                    .setDescription(doc.description + `\n\n :rocket: __**Qovery The simplest way to deploy your applications on AWS**__ :rocket:`)
                    .setURL("https://hub.qovery.com/docs" + doc.path)
                    .setAuthor("Qovery", client.user.avatarURL(), "https://qovery.com")
                    .setTimestamp()
                    .setColor("#5444bc")
                    .setFooter(interaction.user.username, interaction.user.avatarURL())

                interaction.followUp({ embeds: [embed] })
            }
        })
    }
}
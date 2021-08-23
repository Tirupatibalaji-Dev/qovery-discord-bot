import { MessageActionRow, MessageEmbed, MessageSelectMenu } from "discord.js";
import { SlashCommand, Doc } from "../../Interfaces";
import SelectMenu from "../../Utils/SelectMenu";
export const slashCommand: SlashCommand = {
    name: 'docs',
    description: "Qovery Official Docs",
    default: true,

    options: [{
        name: "query",
        description: "Input that you want help",
        required: true,
        type: 3
    }, {
        name: "target",
        description: "Target User",
        required: false,
        type: 6
    }],

    run: async (client, interaction, args) => {
        const query = interaction.options.getString("query", true)
        const user = interaction.options.getUser("target");
        let isDoc = false;
        client.docs.map((doc) => {
            if (doc.name === query || doc.keywords?.includes(query)) {
                const embed = new MessageEmbed()
                    .setTitle(`__${doc.name}__`)
                    .setDescription(doc.description + `\n\n :rocket: __**Qovery The simplest way to deploy your applications on AWS**__ :rocket:`)
                    .setURL("https://hub.qovery.com/docs" + doc.path)
                    .setAuthor("Qovery", client.user.avatarURL(), "https://qovery.com")
                    .setTimestamp()
                    .setColor("#5444bc")
                    .setFooter(interaction.user.username, interaction.user.avatarURL())

                if (user) {
                    interaction.editReply({ content: "Docs for <@" + user.id + ">", embeds: [embed], ephemeral: false })
                } else {
                    interaction.editReply({ embeds: [embed], ephemeral: true })
                }
                isDoc = true
            }
        })
        if (!isDoc) {
            const row = new MessageActionRow()
            const selectMenu = new MessageSelectMenu()

            client.docs.map((doc) => {
                selectMenu.addOptions([{
                    label: doc.name,
                    description: doc.path,
                    value: doc.path
                }])
            });

            row.addComponents(
                selectMenu.setCustomId("Select Query")
                    .setPlaceholder('Make a Selection')
            );

            await interaction.editReply({ content: 'No match. Select a similar search result to send it: ', components: [row] });

            client.on("interactionCreate", async interaction => {

                if (!interaction.isSelectMenu())
                    return;
                if (interaction.customId === 'Select Query') {
                    SelectMenu.select(interaction, client)
                    await interaction.update({ content: "Docs Sent!", components: [] })
                }
            })
        }
    }
}
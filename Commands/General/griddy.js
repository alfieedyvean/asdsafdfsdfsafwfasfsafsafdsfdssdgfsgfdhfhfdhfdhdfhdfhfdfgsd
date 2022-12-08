const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ronaldo")
    .setDescription("Ronaldo griddys on you!"),
    execute(interaction) {
        interaction.reply({content: "Here's Ronaldo steps up for the griddy and scores with demolishing power and conviction", ephemeral: true})
    },
};
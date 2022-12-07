const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, Client} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong"),
    execute(interaction, client) {
        interaction.reply({content: `Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`, ephemeral: true})
    },
};
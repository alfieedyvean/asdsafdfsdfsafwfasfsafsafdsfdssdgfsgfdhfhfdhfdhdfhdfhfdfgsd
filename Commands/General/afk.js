const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, WebookClient, User } = require("discord.js");
const afkModel = require("../../Models/Afk");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("afk")
        .setDescription("Turns you to an AFK state :)"),
    async execute(interaction) {
        
        const {guildId, user} = interaction;
        
        await afkModel.findOne({Guild: guildId, UserID: user.id}, async (err, data) => {
            try {
                if (!data) {
                    await afkModel.create({
                        Guild: guildId,
                        UserID: user.id,
                        Afk: true
                    });
                } else if (data.Afk) {
                    data.Afk = false;
                    data.save();
                    return interaction.reply({ content: "Your **not** afk.", ephemeral: true });
                } else {
                    data.Afk = true;
                    data.save();
                }
                return interaction.reply({ content: "Your **now** afk.", ephemeral: true})
                
            } catch (e) {
                console.log(e);
            }
        }).clone();
    }
        
}
const afkModel = require("../../Models/Afk");

module.export = {
    name: "afkMessage",
    async execute(message) {
        if (message.author.bot || !message.guild) return;

        afkModel.findOne({ Guild: message.guild.id, UserID: message.author.id }, async (err, data) => {
            if (data.Afk) {
                data.Afk = false;
                data.save();
            }
            return;
        });

        const taggedMembers = message.mentions.users.map(msg => msg.id);

        if (taggedMembers.length > 0) {
            taggedMembers.forEach(m => {
                afkModel.findOne({ Guild: message.guild.id, UserID: user.id }, async (err, data) => {
                    if (data.Afk) {
                        message.reply("This user is currently **afk** leave them alone!")
                    } else {
                        console.log(err)
                    }
                })
            })
        }
    }
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(boticon)
    .addField("Bot's name:", bot.user.username)
    .addField("Created at:", bot.user.createdAt)
    .addField("Created by:", "`꧁AsX27꧂#2524`");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"ibot"
}

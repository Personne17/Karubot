
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(boticon)
    .addField("Nom du bot :", bot.user.username)
    .addField("Créé le :", bot.user.createdAt)
    .addField("Créé par :", "`_Personn_#0524`");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"ibot"
}

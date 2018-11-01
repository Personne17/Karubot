const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;

    var userCreateDate = msg.author.createdAt.toString().split(' ');
    var stats_embed = new Discord.RichEmbed()
        .setTitle(`Statistiques Utilisateur de ` + msg.author.tag)
        .addField("Vous avez rejoint le serveur le :", `${msg.author.joinedAt}.`, false)
        .addField("Votre ID :", `${msg.author.id}.`, true)
        .addField("Date de création de votre compte :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(msg.author.displayAvatarURL)
        .setColor("RANDOM")
        msg.channel.send("Vos stats vous ont étées envoyées par message privé ! :smile:")
        msg.author.send(stats_embed)

}
module.exports.help = {
  name: "stats"
}

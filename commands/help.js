const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let msg = message

    var help_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Liste Des Commandes de Karubot")
    .setDescription("Commandes :")
    .addField(`!help`, ` Vous montre ce message`, false)
    .addField(`!cdel`, `Supprimme tous les salons du serveur (Fondateur requis)`, false)
    .addField(`!clear + [NOMBRE]`, `Supprimme le nombre de messages indiqué. ("MANAGE_MESSAGES" requis)`, false)
    .addField("!search + [RECHERCHE]", " Vous donne un lien google vers ce que vous avez cherché.", false)
    .addField("!si", " Vous montre toutes les infos du serveur", false)
    .addField("!report + [MENTION] + [RAISON]", " Vous permet de report un autre uttilisateur", false)
    .addField("!stats", " Vous donne des informations sur votre compte", false)
    .addField("!cname", " Donne la liste des salons sur le serveur (Admin requis à cause de : SPAM)", false)
    .addField("!panic", "Attention: commande très puissante. Kick tous les membres (Fondateur requis)", false)
    .setFooter("Bot créé par _Personn_#0524.")

    message.channel.send(help_embed);
}
module.exports.help = {
  name: "help"
}

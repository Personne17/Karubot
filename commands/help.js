const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    var help_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Liste Des Commandes de Karubot")
    .setDescription("Commandes :")
    .addField(`.help`, ` Vous montre ce message`, true)
    .addField(".salut", "Le bot vous réponds ! N'est-ce pas magique ?", true)
    .addField(".say + [Phrase]", "Le bot répète votre phrase !", true)
    .addField(".invite", "Le bot vous envoie son lien d'invitation discord !", true)
    .addField(".report + [MENTION] + [RAISON]", " Vous permet de report un autre utilisateur", false)
    .addField(".search + [RECHERCHE]", " Vous donne un lien google vers ce que vous avez cherché.", false)
    .addField(".si", " Vous montre toutes les infos du serveur", false)
    .addField(".ibot", "Vous montre les informations du bot", true)
    .addField(".stats", " Vous donne des informations sur votre compte", true)
    .addField(".play + [LIEN YOUTUBE]", "Joue une chanson dans le salon vocal où vous êtes", false)
    .addField(".skip", "Passe à la prochaine chanson.", true)
    .addField(".stop", "Arrête toutes les musiques.", true)
    .addField(".ban + [Utilisateur]", "Bannis l'utilisateur spécifié.", false)
    .addField(".kick + [Utilisateur]", "Kick l'utilisateur spécifié.", true)
    .addField(".tempmute + [Utilisateur] + [1s/m/h/d] + [Raison]", "Vous permet de mute un utilisateur ! (Enlevez-lui tous ses rôles) Manage_Messages requis !")
    .addField(`.clear + [NOMBRE]`, `Supprimme le nombre de messages indiqué. ("MANAGE_MESSAGES" requis)`, false)
    .addField(`.cdel`, `Supprimme tous les salons du serveur (Fondateur requis)`, true)
    .addField(".cname", " Donne la liste des salons sur le serveur (Admin requis à cause de : SPAM)", true)
    .addField(".panic", "Attention: commande très puissante. Kick tous les membres (Fondateur requis)", false)
    .setFooter("Bot créé par _Personn_#0524.")

    message.channel.send(help_embed);
}
module.exports.help = {
  name: "help"
}

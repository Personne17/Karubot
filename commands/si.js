const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;

    var si_embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Informations du serveur")
            .setDescription("Tout ce qu'il y a à savoir sur le serveur.")
            .addField("Nom du serveur :", msg.guild.name, true)
            .addField("Serveur créé le :", msg.guild.createdAt, true)
            .addField("Nombre de salons :", msg.guild.channels.size, true)
            .addField("Nombre de membres :", msg.guild.memberCount, true)
            .addField("Id du fondateur :", msg.guild.ownerID, true)
            .addField("Vous avez rejoint ce serveur le :", msg.guild.joinedAt, true)
            .setFooter("Bot créé par _Personn_#0524.")

        msg.channel.send(si_embed)
}
module.exports.help = {
  name: "si"
}

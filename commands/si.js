const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;

    var si_embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Server infos")
            .addField("Server's name:", msg.guild.name, true)
            .addField("Created at:", msg.guild.createdAt, true)
            .addField("Channel count:", msg.guild.channels.size, true)
            .addField("Member count:", msg.guild.memberCount, true)
            .addField("Owner ID:", msg.guild.ownerID, true)
            .setFooter("Bot by: ꧁AsX27꧂#2524")

        msg.channel.send(si_embed)
}
module.exports.help = {
  name: "si"
}

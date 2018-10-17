const Discord = require('discord.js');




module.exports.run = (bot, message, args) => {
     if(!msg.guild.member(msg.author).hasPermission("ADMINISTRATOR")) {
                        msg.channel.send("Vous n'avez pas les permissions requises pour effectuer cette commande. ('ADMIN')")
            }
            msg.guild.channels.map(c => {
                        msg.channel.send(c + ",\n")
            })
      }    
}

module.exports.help = {
  name: "cname"
}

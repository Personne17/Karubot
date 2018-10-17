const Discord = require('discord.js');




module.exports.run = (bot, message, args) => {
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("Vous n'avez pas les permissions requises pour effectuer cette commande. ('ADMIN')");
}
  message.guild.channels.map(c => {
    if(msg.channel.deletable) {
    message.channel.send(`${c}`)
    }
  })

module.exports.help = {
  name: "cname"
}

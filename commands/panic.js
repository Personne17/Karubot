const Discord = require("discord.js");

module.exports.run = (bot, message, args, delay) => {

    let guild = message.guild
    let msg = message;

    if(msg.guild.member(msg.author) !== msg.guild.owner) return msg.reply("Vous devez être le fondateur du serveur pour effectuer cette commande.");

    if(!guild.me.hasPermission("KICK_MEMBERS")) return msg.reply("Je ne peut pas effectuer cette commande car je n'ai pas la permission 'KICK_MEMBERS'.");

    guild.members.map(m => {
        message.channel.send(`${m} s'est fait kick ! *Il a pas de chance celui là*`)
        delay(100).then(function() {
        if(m.kickable) {
            m.kick();
     
        }
        })
    })
    return;
}
module.exports.help = {
  name: "panic"
}

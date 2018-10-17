const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;

    if(msg.guild.member(msg.author) !== msg.guild.owner) {
        msg.reply(" tu n'as pas les permissions requises pour effectuer cette commande. ('OWNER')")
        return;
    }
    if(!msg.guild.me.hasPermission("MANAGE_CHANNELS")) {
        msg.reply(" je n'ai pas la permission requise pour effectuer cette commande. ('MANAGE_CHANNELS')")
        return;
    }
    msg.guild.channels.map(c => {
        if(c.deletable) {
            c.delete()
        }
    })

}
module.exports.help = {
  name: "cdel"
}

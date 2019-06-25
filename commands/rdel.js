const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;
    if(!msg.guild.me.hasPermission("MANAGE_ROLES")) {
        msg.reply("i don't own the required permission ('MANAGE_CHANNELS') to run this command.");
        return;
    }

    if(msg.guild.member(message.author) !== msg.guild.owner) {
        msg.reply("Nope.")
    }
    var roles = []


    msg.guild.roles.map(r => {

        if(r.editable) {
            if(r.name !== "@everyone") {
                roles.push(r.name)
            }
            r.delete()
        }

    })

    if(roles[0] !== undefined) {
        var roles1 = roles.join(", ")
        msg.reply("deleted roles: " + roles1)
    } else {
        msg.reply("do deletable role found.")
    }

}
module.exports.help = {
  name: "rdel"
}



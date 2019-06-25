const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;

    return msg.reply("Here's the link to invite me, fellow doggo: https://discordapp.com/oauth2/authorize?client_id=457197950553292800&scope=bot&permissions=2146958847")

}
module.exports.help = {
  name: "invite"
}

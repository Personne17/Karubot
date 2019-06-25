const Discord = require("discord.js");
const delay = require("timeout-as-promise");

module.exports.run = (bot, message, args) => {
    
    let msg = message;
    if(args > 100) {
        args[0] = 100
    }

    if(args <= 1) return msg.channel.send("The amount of messages must be over 1")
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("You are not worthy. ('MANAGE_MESSAGES') !");

    if(!args[0]) return message.channel.send("Please specify a message amount!")
    message.channel.bulkDelete(args[0]).then(() => {
        delay(1000).then(function() {
            message.channel.send(`${args[0]} messages deleted !`)  
            delay(5000).then(function() {
                    message.delete().catch(O_o=>{});
            });   
        })

        return;
    })



}
module.exports.help = {
  name: "clear"
}

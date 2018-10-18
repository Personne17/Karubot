const Discord = require("discord.js");
const delay = require("timeout-as-promise");

module.exports.run = (bot, message, args) => {
    
    let msg = message;
    if(args > 100) {
        args = 100
    }
    if(args <= 1) return msg.channel.send("Le nombre de messages à supprimmer doit être supérieur à 1")
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions requises pour effectuer cette commande. ('MANAGE_MESSAGES') !");

    if(!args[0]) return message.channel.send("Tu dois indiquer le nombre de messages à surpprimer !")
    message.channel.bulkDelete(args[0]).then(() => {
        delay(1000).then(function() {
            message.channel.send(`${args[0]} messages ont été supprimés !`)  
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

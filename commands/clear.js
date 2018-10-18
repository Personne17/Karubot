const Discord = require("discord.js");
const delay = require("timeout-as-promise");

module.exports.run = (bot, message, args) => {
    
    let msg = message;
    if(args > 100) return msg.channel.send("Le nombre maximum de messages pouvant être supprimmés est de 100")
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions requises pour effectuer cette commande. ('MANAGE_MESSAGES') !");

    if(!args[0]) return message.channel.send("Tu dois indiquer le nombre de messages à surpprimer !")
    message.channel.bulkDelete(args[0]).then(() => {
        delay(1000).then(function() {
            message.channel.send(`${args[0]} messages ont été supprimés !`)       
        })
        delay(5000).then(function() {
            message.delete()
        });
        return;
    })



}
module.exports.help = {
  name: "clear"
}

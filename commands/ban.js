
const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    message.delete();
if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
if(args[0] == "help"){
  message.reply("Usage: !ban <user> <reason>");
  return;
}

let msg = message;
let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return message.reply("Je ne trouve pas cet utilisateur :thinking:...");
if(bUser.id === bot.user.id) return message.channel.send("je ne peut pas me ban moi-même :joy:"); 
let bReason = args.join(" ").slice(22);
if(!bReason) return msg.reply("Vous devez rentrer une raison.");
if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peut pas bannir cet uttilisateur.");

let banEmbed = new Discord.RichEmbed()
.setDescription("Ban !")
.setColor("#bc0000")
.addField("Utilisateur Banni :", `${bUser} with ID ${bUser.id}`)
.addField("Banni par :", `<@${message.author.id}> with ID ${message.author.id}`)
.addField("Banni dans :", "message.channel")
.addField("A :", message.createdAt)
.addField("Raison :", bReason);

let incidentchannel = message.guild.channels.find(`name`, "incidents");
if(!incidentchannel) return message.channel.send("veuillez créér un salon nommé 'incidents' pour pouvoir effectuer cette commande.");

message.guild.member(bUser).ban(bReason);
incidentchannel.send(banEmbed);

}
module.exports.help = {
  name: "ban"
}

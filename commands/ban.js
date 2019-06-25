
const Discord = require("discord.js");
const delay = require("timeout-as-promise");
module.exports.run = (bot, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
if(args[0] == "help"){
  message.reply("How-To: .ban <user> <reason>");
  return;
}

let msg = message;
let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!bUser) {
  var mes = message.reply("i can't find him :thinking:...");
  delay(4000).then(function() {
    mes.delete();
  })
  return;
} 
if(bUser.id === bot.user.id) {
  var mes = message.reply("i can't ban myself! :joy:");
  delay(4000).then(function() {
    mes.delete();
  })
  return;
}
if(bUser.id === msg.author.id) {
  var mes = message.reply("you can't ban yourself, dumbass :joy:");
  console.log(mes)
  delay(4000).then(function() {
    mes.delete();
  })
  return;
}
let bReason = args.join(" ").slice(22);

if(!bReason) {
  var mes = msg.reply("you know, a reason is needed, else you're a bad admin");
  delay(4000).then(function() {
    mes.delete();
  })
  return;
} 

if(bUser.hasPermission("ADMINISTRATOR")) {
  var mes = message.reply("this user is not bannable.");

  delay(4000).then(function() {
    mes.delete();
  })
  return;
} 


var date = new Date();
var utcDate = date.toUTCString();

let banEmbed = new Discord.RichEmbed()
.setDescription("Ban !")
.setColor("#bc0000")
.addField("Banned User :", `${bUser}, ID: ${bUser.id}`)
.addField("Banned by :", `<@${message.author.id}> ID: ${message.author.id}`)
.addField("Banned in :", `${message.channel}`)
.addField("At :", utcDate)
.addField("Reason :", bReason);

message.guild.member(bUser).ban(bReason);
msg.channel.send(banEmbed);

}
module.exports.help = {
  name: "ban"
}

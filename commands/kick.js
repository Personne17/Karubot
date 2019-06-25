const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous avez besoin de la permission 'KICK_MEMBERS' pour effectuer cette commande.");
    if(args[0] == "help"){
      message.reply("Usage: kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.reply("Who is he? :thinking:...");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("ADMINISTRATOR")) return message.reply("He is an admin, noob.");
    var date = new Date();
    var utcDate = date.toUTCString();
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick !")
    .setColor("#e56b00")
    .addField("Kicked User:", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked by:", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked in:", message.channel)
    .addField("At:", utcDate)
    .addField("Reason:", kReason);

    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}

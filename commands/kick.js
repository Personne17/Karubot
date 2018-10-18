const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous avez besoin de la permission 'KICK_MEMBERS' pour effectuer cette commande.");
    if(args[0] == "help"){
      message.reply("Usage: !kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.reply("Je ne trouve pas cet utilisateur :thinking:...");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return MSGesture.reply("Je ne peut pas kick cet utilisateur.");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick !")
    .setColor("#e56b00")
    .addField("Utilisateur kické :", `${kUser} with ID ${kUser.id}`)
    .addField("Kické par :", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kické dans :", message.channel)
    .addField("A :", message.createdAt)
    .addField("Raison :", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Veuillez créér un salon 'incidents' pour effectuer cette commande.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
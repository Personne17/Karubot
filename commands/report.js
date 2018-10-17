const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je ne trouve pas cet uttilisateur :thinking:... !report @Uttilisateur raison");
  


    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("Veuillez mettre une raison. !report @Uttilisateur raison")

    var guildID = '500373461580120066'

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Rapports :")
    .setColor("#15f153")
    .addField("Uttilisateur reporté :", `${rUser} with ID: ${rUser.id}`)
    .addField("Reporté par :", `${message.author} with ID: ${message.author.id}`)
    .addField("Salon :", message.channel)
    .addField("Depuis le serveur :", guildID)
    .addField("Heure :", message.createdAt)
    .addField("Raison :", rreason);

    
    var guild = bot.guilds.get(guildID);

    let reportschannel = guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Erreur Interne. Rééssayez ultérieurement.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}

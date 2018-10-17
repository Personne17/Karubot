const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je ne trouve pas cet uttilisateur :thinking:... ");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Rapports :")
    .setColor("#15f153")
    .addField("Uttilisateur reporté :", `${rUser} with ID: ${rUser.id}`)
    .addField("Reporté par :", `${message.author} with ID: ${message.author.id}`)
    .addField("Salon :", message.channel)
    .addField("Heure :", message.createdAt)
    .addField("Raison :", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Crééz un salon 'reports' et je pourrais y poster les reports.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}

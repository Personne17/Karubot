const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let msg = message

    var help_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Doggobot's commands")
    .setDescription("Commands :")
    .addField(`help`, ` Shows you this.`, true)
    .addField("woof", "WOOF!!", true)
    .addField("dogpic", "Sends a picture of a beautiful doggo!")
    .addField("invite", "Ooh, an invite ? For me ?!", true)
    .addField("search + [RECHERCHE]", "Returns a google link with your search", false)
    .addField("say [Sentence]","Makes the bot say the specified sentence", false)
    .addField("si", "Server Info", false)
    .addField("ibot", "Bot Info", true)
    .addField("kick + [user] + [reason]", "Kicks the user", false)
    .addField("ban + [user] + [reason]", "Bans the user.", false)
    .addField("tempmute + [User] + [1s/m/h/d] + [Reason]", "Mutes someone for the specified amount of time.")
    .addField(`clear + [Number]`, `Clears the specified amount of messages`, false)
    .addField("rdel","Deletes all deletable roles", true)
    .addField(`cdel`, `Deletes every channel. Owner required.`, true)
    .addField("panic", "Kicks everyone. Owner required", false)
    .setFooter("Bot by ꧁AsX27꧂#2524.")

    message.channel.send(help_embed);
}
module.exports.help = {
  name: "help"
}

const Discord = require("discord.js");
const Tenor = require("tenorjs").client({
    "Key": "RXJL6E8YZ1RJ", // https://tenor.com/developer/keyregistration
    "Filter": "medium", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "minimal", // either minimal or basic, not case sensitive
    "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly



    
})
module.exports.run = (client, msg, args, guild) => {
    let message = msg
    let user = msg.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!user) return msg.reply("Who do you want to slap ?")
    Tenor.Search.Random("fight", "1").then(Results => {
        Results.forEach(Post => {
            msg.channel.send(`${msg.author.username} slaps ${user} ! ${Post.url}`)
        });
    }).catch(console.error);



}
module.exports.help = {
  name: "slap"
}

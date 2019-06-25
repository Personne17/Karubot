const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;

        var search_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("You searched:")
            .setDescription(`https://www.google.com/search?q=` + args.join('+'))
            .setThumbnail(`https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png`)
            msg.channel.send(search_embed);

}
module.exports.help = {
  name: "search"
}

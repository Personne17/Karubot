const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;

        var search_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Voici votre recherche : ")
            .setDescription(`https://www.google.fr/search?q=` + args.join('+'))
            .setThumbnail(`./images/google.png`)
            msg.channel.send(search_embed);

}
module.exports.help = {
  name: "search"
}

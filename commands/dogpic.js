const Discord = require("discord.js");
const fetch = require("node-fetch")
module.exports.run = (client, msg, args, guild) => {
    const json = fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
    json.then(function(data){
        console.log(data.message)
        var dog_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("DOGOO! :dog:")
            .setImage(data.message)
    
    
        msg.channel.send(dog_embed)

    })
    

}
module.exports.help = {
  name: "dogpic"
}

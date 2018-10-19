const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;
    if(!message.member.voiceChannel) {

        message.channel.sendMessage(":x: Tu dois être dans un salon vocal"); 
    
        return;
    
      }
    
        var server = servers[message.guild.id];
    
        if(server.dispatcher) server.dispatcher.end();
    
        return;

}
module.exports.help = {
  name: "skip"
}

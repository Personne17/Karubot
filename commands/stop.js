
const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;
    if(!message.member.voiceChannel) 
    
    return message.channel.send(":x: Tu dois être dans un salon vocal");
    
    message.member.voiceChannel.leave();
    
    return;
}
module.exports.help = {
  name: "stop"
}

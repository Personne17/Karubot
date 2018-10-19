

const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
          
    let msg = message;
    if (!args) {

        message.channel.sendMessage("Tu dois m’indiquer un lien YouTube"); 
        
    return;
        

    }

if(!message.member.voiceChannel) {

    message.channel.sendMessage(":x: Tu dois être dans un salon vocal"); 

    return;

  }
  if(!servers[message.guild.id]) servers[message.guild.id] = {

    queue: []

  };
  var server = servers[message.guild.id];

  server.queue.push(args[1]);

  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {

  play(connection, message) 

  });
}
module.exports.help = {
    name: "play"
}
      

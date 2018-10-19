
const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let blacklisted = ['pute', 'merde', 'con', 'connard', 'connards', 'merd', 'conne', 'connes', 'merdes']
    let foundInText = false;
    for(var i in blacklisted) {
      if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    
    
    if(foundInText) {
      message.delete();
      message.channel.send("Merci de ne pas envoyer d'insultes.");
      console.log(blacklisted[i].toLowerCase());
    }
}
module.exports.help = {
  name: "blacklistmot"
}

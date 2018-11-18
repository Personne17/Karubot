
const Discord = require("discord.js"); //acces a la librairie discord

module.exports.run = (client, msg, args, guild) => {

  if(guild.me.hasPermission("MANAGE_CHANNELS")) { // Si le bot a la permission de supprimer les messages
      msg.delete(); //supprime le message d'invocation
  }

  if(guild.me.hasPermission("MANAGE_ROLES")) {
      const verifchannel = client.channels.find("name", "verification") //verif
      let verifmember = msg.member

      verifmember.addRole('513346079287410689'); //ajout du role au membre

      verifchannel.send(`Bienvenue sur le serveur, \`${msg.author.username}\``) //envoi du message de conirmation
  }
}
module.exports.help = {
  name: "verif"
}

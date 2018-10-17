const discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  return message.channel.send('Salut !');

};

module.exports.help = {
  name: "salut"
};

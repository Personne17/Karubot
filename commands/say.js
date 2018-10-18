const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
const discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  function randnum(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  var num = randnum(10)

  switch (num) {

    case 0:
      message.channel.send("Waf woof ! :dog:");
      break;
    case 1:
      message.channel.send("Woof woof ?.. :dog2:");
      break;
    case 2:
      message.channel.send("BARK BAR- woof!!");
      break;
    case 3:
      message.channel.send("Wuf, woof waf. Woof woof wuf, wow ! Wof wof waf woof, waf waf. :dog:");
      break;
    case 4:
      message.channel.send("Waf! Wof! Woof! Wuf!");
      break;
    case 5:
      message.channel.send("Wof woof...");
      break;
    case 6:
      message.channel.send("BORK BARK !? :dog2:");
      break;
    case 7:
      message.channel.send("Hot doggo :hotdog:");
      break;
    case 8:
      message.channel.send(":musical_note: woof woooof waaf wuf :musical_note:");
      break;
    case 9:
      message.channel.send("They see me woofing they're barking");
      break;
    case 10:
      message.channel.send("Woof woof, Dog Lord woahf");
      break;
  }


};

module.exports.help = {
  name: "woof"
};

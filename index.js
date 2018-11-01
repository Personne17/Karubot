const discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const bot = new discord.Client({disableEveryone: true});
const token = process.env.token;
var ffmpeg = require('ffmpeg');
const delay = require("timeout-as-promise");
var up = true
const ytdl = require('ytdl-core');
const queue = new Map();
var servers = {};

require('http').createServer((req, res) => {
    console.log(req.url);
    res.end("Hello World!");
}).listen(5555);
 
// If the master asks us to stop, do so
process.on('SIGINT', () => {
    console.log("Goodbye World!");
 
    // Implicitly calls server.close, then disconnects the IPC channel:
    require('cluster').worker.disconnect();
});

function play(connection, message) {
  
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() { 
    if (server.queue[0]) play(connection, message);

    else connection.disconnect();

  });
}

// When bot ready
bot.on("ready", () => {
  console.log(`${bot.user.username} est prêt à kick !`);
  bot.user.setActivity(`.help | ${bot.guilds.size} serveur(s)`, {type: "WATCHING"})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);

  while(up === true) {
    up = false
  delay(17000000).then(function() {
    console.log("Up !")
    up = true
    })
  }
});

// Load commands
bot.commands = new discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("Il n'y a aucune commandes à charger.");

  console.log(`Chargement de : ${jsfiles.length} commandes...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} chargée !`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(ch => ch.name === 'bienvenue');
  channel.send(`Bienvenue à : ${member} sur le serveur !`);

  
  var role = member.guild.roles.find('name', 'Verif');
  if(!role) return;

  member.addRole(role)



  return;
})

bot.on("guildMemberRemove", member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'bienvenue');
  channel.send(`${member} a quitté le serveur D: !`);

 

})


// Message 
bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
 
  if (!command.startsWith(prefix)) return;

  if(message.content.startsWith(prefix)) {
    let args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLowerCase()) { 

  case "play":

  if (!args[1]) {

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

break; 

case "skip":

  if(!message.member.voiceChannel) {

  message.channel.sendMessage(":x: Tu dois être dans un salon vocal"); 

  return;

}

  var server = servers[message.guild.id];

  if(server.dispatcher) server.dispatcher.end();

  break;

case "stop":

  if(!message.member.voiceChannel) 
  
  return message.channel.send(":x: Tu dois être dans un salon vocal");

  message.member.voiceChannel.leave();

  break;
  }
}


  let args = messageArray.slice(1);
  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
});

bot.login(token);

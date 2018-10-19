const discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const bot = new discord.Client({disableEveryone: true});
const token = process.env.token;
const delay = require("timeout-as-promise");

// When bot ready
bot.on("ready", () => {
  console.log(`${bot.user.username} est prêt à kick !`);
  bot.user.setActivity(`.help | ${bot.guilds.size} serveur(s)`, {type: "WATCHING"})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
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
  const channel = member.guild.channels.find(ch => ch.name === '🎃bienvenue🎃');
  if(member.id !== '479791519252086786') return channel.send(`Bienvenue à : ${member} sur le serveur !`);

  if(member.kickable) {
  member.kick()
  return;
  }

  return;
})


// Message event
bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
});

bot.login(token);

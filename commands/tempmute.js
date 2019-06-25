const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  let msg = message;

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No, noob.");
  if(args[0] == "help"){
    message.reply("Use : !tempmute <user> <1s/m/h/d>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Who, again ? :thinking: ...");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("I can't mute him... (He has Manage Messages)");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Gimme a reason");

  let muterole = msg.guild.roles.find(`name`, "muted");

  let mutetime = args[1];
  if(!mutetime) return message.reply("You need to specify a time. [1s/1m/1h/1d]");

  message.delete().catch(O_o=>{});

  try{
    tomute.send(`You just got muted for: ${mutetime}.`)
  }catch(e){
    message.channel.send(`${tomute} has been muted for: ${mutetime}`)
  }
  var date = new Date();
  var utcDate = date.toUTCString();
  
  let muteembed = new Discord.RichEmbed()
  .setDescription(`Command ran by: ${message.author}`)
  .setColor("#ffa500")
  .addField("Muted user:", tomute)
  .addField("Muted in:", message.channel)
  .addField("At:", utcDate)
  .addField("For:", mutetime)
  .addField("Reason:", reason);

  message.channel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted.`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
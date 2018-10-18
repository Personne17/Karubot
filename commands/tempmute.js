const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nope tu ne peut pas faire ça.");
  if(args[0] == "help"){
    message.reply("Uttilisation : !tempmute <uttilisateur> <1s/m/h/d>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Je ne trouve pas cet utilisateur :thinking: ...");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peut pas mute cet utilisateur.");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Merci d'entrer une raison.");

  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  message.delete().catch(O_o=>{});

  try{
    tomute.send(`Vous venez de vous faire mute pendant : ${mutetime}.`)
  }catch(e){
    message.channel.send(`Un uttilisateur s'est fait mute pendant : ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Commande éxécutée par : ${message.author}`)
  .setColor("#ffa500")
  .addField("Uttilisateur muté :", tomute)
  .addField("Muté dans :", message.channel)
  .addField("A :", message.createdAt)
  .addField("Pendant :", mutetime)
  .addField("Raison :", reason);

  let incidentschannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentschannel) return message.reply("Veuillez créer un salon 'incidents' avant d'effectuer cette commande.");
  incidentschannel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> vient d'être unmute !!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
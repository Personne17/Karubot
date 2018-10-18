const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let msg = message;
    let member = msg.guild.member(msg.author);

    if(!member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous ne pouvez pas effectuer cette commande.");
    if(args[0] == "help"){
      message.reply("Uttilisation : !tempmute <utilisateur> <1s/min/heures/jours>");
      return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Je n'ai pas pu trouver cet utilisateur.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peut pas le mute !");
    let reason = args.slice(2).join(" ");
    if(!reason) return message.reply("Merci d'entrer une raison.");
  
    let muterole = message.guild.roles.find(`name`, "muted");
    //Création du rôle
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
    if(!mutetime) return message.reply("Merci d'entrer un temps !");
  
    message.delete().catch(O_o=>{});
  
    try{
      tomute.send(`Vous avez été muté pendant : ${mutetime}.`)
    }catch(e){
      message.channel.send(`Un utilisateur vient d'être muté pendant : ${mutetime}`)
    }
  
    let muteembed = new Discord.RichEmbed()
    .setDescription(`Mute écécuté par : ${message.author}`)
    .setColor(orange)
    .addField("Utilisateur muté :", tomute)
    .addField("Muté dans :", message.channel)
    .addField("A :", message.createdAt)
    .addField("Pendant :", mutetime)
    .addField("Raison :", reason);
  
    let incidentschannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentschannel) return message.reply("Merci de créer un salon s'appelant 'incidents' d'abord !");
    incidentschannel.send(muteembed);
  
    (tomute.addRole(muterole.id));
  
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> vient d'être démuté!`);
    }, ms(mutetime));
  
  
  //end of module
  }
module.exports.help = {
  name: "tempmute"
}






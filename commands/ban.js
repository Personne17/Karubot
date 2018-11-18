
const Discord = require("discord.js");

module.exports.run = (client, msg, args, guild) => {
  var achannel = client.channels.get("513420946523291658")
      var bchannel = client.channels.get("513387249153474561")
        msg.delete();
        if(!msg.member.hasPermission("BAN_MEMBERS")) return;
          if(args[0] == "help"){
          bchannel.send("Uttilisation: !ban <utilisateur> <raison>");
          return;
        }

        let bUser = guild.member(msg.mentions.users.first() || guild.members.get(args[0]));
        if(!bUser) return bchannel.send("C'est qui lui ? Il existe pas :thinking: !");
        if(bUser.id === client.user.id) return bchannel.send("Je ne peut pas me ban moi-même :joy:");
        let bReason = args.join(" ").slice(22);
        if(!bReason) return bchannel.send(`Ah tu veut ban ${bUser} ? C'est quoi ta raison :joy:?`);
        if(bUser.id == msg.author.id) return bchannel.send("AH ! J'avais jamais vu quelqu'un se ban soi-même avant, tiens :joy:")
        if(bUser.id == 408281273736626187) return bchannel.send("`_Personn_#0524` ? Y'a encore un idiot qui veut te ban :joy:!")
        if(bUser.id == 499239421225205760) return bchannel.send("Runomos-le-grand ne peut pas être banni, IGNORANT :joy:!")
        if(bUser.hasPermission("ADMINISTRATOR")) return bchannel.send("T'est qui pour vouloir bannir un admin toi ? T'est Personn :joy:");

        let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban !")
        .setColor("#bc0000")
        .addField("Utilisateur Banni :", `${bUser.username} avec l'id : ${bUser.id}`)
        .addField("Banni par :", `<@${msg.author.username}> avec l'id : ${msg.author.id}`)
        .addField("Banni dans :", `${msg.channel.name}`)
        .addField("A :", msg.createdAt)
        .addField("Raison :", bReason);

        let incidentchannel = client.channels.get("513354844564881430");

        guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);
        bUser.send(bReason);
}
module.exports.help = {
  name: "ban"
}

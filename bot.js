const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    var prefix = "*";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**اكتب شي بعد الكوماند**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {https://pastebin.com/night_mode
            return;
        }
    });


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`skran`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`| HardServer`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});


client.login("NTMzNjc5NzY2MjUyMDI3OTI3.Dxujug.3XDFFEoj056iYA-PI1ilSG1LaII");
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const config = require("./settings.json");


client.on('ready', () => {
console.log(`Successfully Logged in as ${client.user.username}!`)
});

client.on('message', m =>{
	let args = m.content.split(' ').slice(1);

if (m.content.startsWith(config.prefix + 'kick')) {
     if(m.author.bot) return;
    var user = m.mentions.users.first();
	var member = m.guild.member(user);
	  let role = m.member.hasPermission('KICK_MEMBERS');
		if (!m.member.hasPermission('KICK_MEMBERS') && m.author.id !== config.owner)
		return m.channel.send("**You don't have the permission Kick Members ! :no_entry_sign:**");
	       if (!user)
		return m.channel.send('**Please Specify a user to Kick!**');
	       m.channel.send(`**${user.username} got kicked by ${m.author}!** :O `)
member.kick()
  } else
if (m.content.startsWith(config.prefix + 'ban')) {
if (m.author.bot) return;
    var user = m.mentions.users.first();
	var member = m.guild.member(user);
if (!m.member.hasPermission('BAN_MEMBERS') && m.author.id !== config.owner)
return m.channel.send("**You don't have the permission Ban Members ! :no_entry_sign:**");
if (!user)
return m.channel.send(`**Please Specify a user to Ban!**`);
m.channel.send(`**${user.username} got banned by ${m.author}!** :O `)
member.ban()
 } else
if (m.content.startsWith(config.prefix + 'shutdown')) {
if (m.author.id !== config.owner && m.author.id !== config.admin)
return m.channel.send(`**Soz, but you\'re not the Owner!**`)
client.user.setStatus('invisible').then(() => m.channel.send(`**Shutting Down!**\n\`\Going Offline!\`\ `).then(() => process.exit(0)));
 } else
if (m.content.startsWith(config.prefix + 'ping')) {
m.channel.send(`**Pong! Took __${Math.round(client.ping)}__ ms to reply :smile:** `)
 } else
if (m.content.startsWith(config.prefix + 'help')) {
if (m.author.bot) return;
m.channel.send(`${m.author.username}: A list of commands was sent in DM!\nDo \`\n${config.prefix}invite\`\ to invite me to your Server!`).then(()=> m.author.send(`**Help Commands: \n${config.prefix}kick** - Kicks a Specified User\n**${config.prefix}ban** - Bans a Specified User\n**${config.prefix}clear** - Clears the Amount of Messages. Maximum = 99\n**${config.prefix}say** - Bot says the thing you want it to say\n**${config.prefix}ping** - Pong!\n**${config.prefix}guilds** - Shows the Guild Name and Amount of Users on the Guild ${client.user} is in.\n**${config.prefix}myid** - Shows your ID\n**${config.prefix}meme** - Shows random Memes`));
  } else
if (m.content.startsWith(config.prefix + 'myid')) {
if (m.author.bot) return
m.channel.send(`${m.author} ** Sent your ID in DM!**`).then(()=> m.author.send(`**Hello! Here\'s your ID :smile:\n${m.author.id}**`));
  } else
if (m.content.startsWith(config.prefix + 'invite')) {
m.channel.send(`**__${m.author.username}__ sent my *Invite*  in DM!**`).then(() => m.author.send(`**${m.author.username} here\'s my invite!\n ==> https://discordapp.com/oauth2/authorize?client_id=331025846838099968&scope=bot&permissions=1043472446**`));
  } else
        if (m.content.startsWith(config.prefix + 'say')) {
            if (!m.member.hasPermission('ADMINISTRATOR') && m.author.id !== config.owner)
return m.channel.send(`**${m.author} You lack the permissions \'\ADMINISTRATOR\'\n Try asking the Guild Owner/Admin for access. :no_entry_sign:**`);	
                var say = m.content.split(" ").splice(1).join(" ")
                m.delete();
                m.channel.send(say)
            
} else
if (m.content.startsWith(config.prefix + 'guilds')) {
m.channel.send(`**Currently in ${client.guilds.size} Guilds, here are the Guild Names!!** \n`+ client.guilds.map(g=>`**\`\`\`xl\n\nGuild Name: ${g.name} , ${g.memberCount} Members\n\n\`\`\`**`).join('\n'))
 }
});
client.on('message', message => {
  let args = message.content.split(' ').slice(1);
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  if (message.content.startsWith(config.prefix + "eval")) {
if (message.author.id !== config.owner && message.author.id !== config.admin)return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

client.on("message", message => {
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ');
  if (message.content.startsWith(config.prefix + "clear")) {
 if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== config.owner) return message.reply('You Dont Have Enough Permissions!');
	if (message.author == client.user) return;
								limit: 99
      let messagecount = parseInt(result);
      message.channel.fetchMessages({
        limit: messagecount + 1
      }).then(messages => message.channel.bulkDelete(messages));
} else
if(message.content.startsWith(config.prefix + 'meme')){ 
if (message.author == client.user) return;

    var memes = ["http://godbots.pw/memes/gif/1.gif", "http://godbots.pw/memes/gif/2.gif", "http://godbots.pw/memes/gif/3.gif", "http://godbots.pw/memes/gif/4.gif", "http://godbots.pw/memes/gif/5.gif", "http://godbots.pw/memes/gif/6.gif", "http://godbots.pw/memes/gif/7.gif", "http://godbots.pw/memes/gif/8.gif", "http://godbots.pw/memes/gif/9.gif", "http://godbots.pw/memes/gif/10.gif", "http://godbots.pw/memes/gif/11.gif", "http://godbots.pw/memes/gif/12.gif", "http://godbots.pw/memes/gif/13.gif", "http://godbots.pw/memes/gif/14.gif", "http://godbots.pw/memes/gif/15.gif", "http://godbots.pw/memes/gif/16.gif", "http://godbots.pw/memes/gif/17.gif", "http://godbots.pw/memes/gif/18.gif", "http://godbots.pw/memes/gif/19.gif", "http://godbots.pw/memes/gif/20.gif", "http://godbots.pw/memes/gif/21.gif", "http://godbots.pw/memes/gif/22.gif", "http://godbots.pw/memes/gif/23.gif", "http://godbots.pw/memes/gif/24.gif", "http://godbots.pw/memes/gif/25.gif", "http://godbots.pw/memes/gif/26.gif", "http://godbots.pw/memes/gif/27.gif", "http://godbots.pw/memes/gif/28.gif", "http://godbots.pw/memes/gif/29.gif", "http://godbots.pw/memes/gif/30.gif", "http://godbots.pw/memes/gif/31.gif", "http://godbots.pw/memes/gif/32.gif", "http://godbots.pw/memes/gif/33.gif", "http://godbots.pw/memes/gif/34.gif", "http://godbots.pw/memes/gif/35.gif", "http://godbots.pw/memes/gif/36.gif", "http://godbots.pw/memes/gif/37.gif"];
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.URL)
    .setColor ('RANDOM')
    .setImage(memes[Math.floor(Math.random() * memes.length)])
     message.channel.sendEmbed(embed);
}});

client.on('message', m => {
  let args = m.content.split(' ').slice(1);
	var argsresult = args.join(' ');
  var result = args.join(' ');

if (m.content.startsWith(config.prefix + 'setgame')) {
if (m.author.id !== config.owner && m.author.id !== config.admin)
return m.channel.send(`**Sorry but you\'re not the owner!**`);
			m.channel.send(`**Success! Changed my Game Status to __${argsresult}__**`)
		client.user.setGame(argsresult);
}
});

client.login(config.token);
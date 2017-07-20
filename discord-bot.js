const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const embed = new Discord.RichEmbed()
const client = new Discord.Client();
const fs = require("fs");
const config = require("./settings.json");


client.on('ready', () => {
console.log(`Successfully Logged in as ${client.user.username}!`)
});

client.on('message', m =>{
	let args = m.content.split(' ').slice(1);

if (m.content.startsWith(config.prefix + 'kick')) {
var reason = args.splice(1).join(' ');
var user = m.mentions.users.first();
var member = m.guild.member(user);
if (!m.member.hasPermission('KICK_MEMBERS') && m.author.id !== config.owner)
return m.channel.send(`**You\'re missing the Permission Kick Members! :no_entry_sign:**`);
if(!user)
return m.channel.send(`**Please Specify a User to Kick!**`);
if (!reason)
return m.channel.send(`**Please give a Reason to Kick __${user.username}__!**`)
m.channel.send(`**Success!\n${m.author} kicked \`\n${user.username}\`\ because of __${reason}__**`)
member.kick()
  } else
if (m.content.startsWith(config.prefix + 'ban')) {
if (m.author.bot) return;
    var user = m.mentions.users.first();
var reason = args.splice(1).join(' ');
	var member = m.guild.member(user);
if (!m.member.hasPermission('BAN_MEMBERS') && m.author.id !== config.owner)
return m.channel.send("**You\'re missing the Permission Ban Members! :no_entry_sign:**");
if (!user)
return m.channel.send(`**Please Specify a user to Ban!**`);
if (!reason)
return m.channel.send(`**Please give a Reason to Ban __${user.username}__!**`)
m.channel.send(`**Success!\n${m.author} banned \`\n${user.username}\`\ because of __${reason}__**`)
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
m.channel.send(`${m.author.username}: A list of commands was sent in DM!\nDo \`\n${config.prefix}invite\`\ to invite me to your Server!`).then(()=> m.author.send(`**\`\`\`\nThis Help Message Will have Different Categorys!\n\n- Utility:\n${config.prefix}help - Shows the Help Commands\n${config.prefix}ping - Pong!\n${config.prefix}meme - Shows Random Memes\n${config.prefix}say - Says something you Say\n${config.prefix}embed - Embeds the Word/Sentence you say\n${config.prefix}roll - Rolls a dice!\n${config.prefix}8ball - Ask 8ball a question!\n\n- Moderation:\n${config.prefix}clear - Clears the Specified Amount Of Messages\n${config.prefix}kick - Kicks a Specified User\n${config.prefix}ban - Bans a Specified User\n\n- Information:\n${config.prefix}userinfo - Shows the Information of a Specified User\n${config.prefix}serverinfo - Shows the Server Info\n\nDo ${config.prefix}invite to invite ${client.user.username}!\n${client.user.username} was Coded in the Discord.js Library!\`\`\`\**\n\n **Our Discord Support Server\nhttps://discord.gg/wsPz5rq**`));
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
if(m.author.id !== config.owner) return;
m.channel.send(`**Currently in ${client.guilds.size} Guilds, here are the Guild Names!!** \n`+ client.guilds.map(g=>`**Guild Name: __${g.name}__ , \`\n${g.memberCount}\`\ Members**`).join('\n'))
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
var stream = args.join(' ');

if (m.content.startsWith(config.prefix + 'setgame')) {
if (m.author.id !== config.owner && m.author.id !== config.admin)
return m.channel.send(`**Sorry but you\'re not the owner!**`);
			m.channel.send(`**Success! Changed my Game Status to __${argsresult}__**`)
		client.user.setGame(argsresult);
} else
if (m.content.startsWith(config.prefix + 'userid')) {
    var user = m.mentions.users.first();
if (m.author.bot) return
if (!user)
return m.channel.send(`**Please Specify a User!**`);
m.channel.send(`**Hello ${m.author.username}, i see that you wanted ${user}\'s ID? Here it is\n__${user.id}__**`)
  } else
if(m.content.startsWith(config.prefix + 'setstream')) {
if (m.author.id !== config.owner)
return m.channel.send(`**Sorry but you\'re not the owner!**`);
m.channel.send(`**Changed my Game to Stream and now, it\'s displaying __${stream}__**`)
client.user.setGame(stream, 'https://twitch.tv/bouleytator')
  } else
  if (m.content.startsWith(config.prefix +'roll')) {
  		var result = Math.floor((Math.random() * 100) + 1);
  		m.channel.send(`**${m.author} you rolled :game_die: ${result}! :game_die:**`);
  } else
    if (m.content.startsWith(config.prefix + '8ball')) {
    	var sayings = ["It is certain",
										"It is decidedly so",
										"Without a doubt",
										"Yes, definitely",
										"You may rely on it",
										"As I see it, yes",
										"Most likely",
										"Outlook good",
										"Yes",
										"Signs point to yes",
										"Reply hazy try again",
										"Ask again later",
										"Better not tell you now",
										"Cannot predict now",
										"Concentrate and ask again",
										"Don't count on it",
										"My reply is no",
										"My sources say no",
										"Outlook not so good",
										"Very doubtful"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			m.channel.send(sayings[result]);
    }
});


client.on('message', message => {
if (message.content.startsWith(config.prefix + 'userinfo')) {

  let user = message.mentions.users.first();
  if (!user) {
    user = message.author;
  }
  let nick = message.guild.members.get(user.id).nickname;
  if (!nick) {
    nick = 'No Nicknames';
  }
  let status = user.presence.status;
  if (status === 'online') {
    status = 'Online';
  }
  else if (status === 'idle') {
    status = 'Idle';
  }
  else if (status === 'dnd') {
    status = 'Do Not Disturb';
  }
  else {
    status = 'Invisible';
  }
  let isStream = 'Current Game';
  if (user.presence.game && user.presence.game.streaming) {
    isStream = 'Current Stream';
  }
  let game;
  if (user.presence.game === null) {
    game = 'No Game Displayed';
  }
  else if (user.presence.game.streaming) {
    game = `[${user.presence.game.name}](${user.presence.game.url})`;
  }
  else {
    game = user.presence.game.name;
  }
  let roles = message.guild.members.get(user.id).roles.map(r => r.name).slice(1).join('\n');
  if (roles.length === 0) roles = '-';

  message.channel.send({
    embed: {
      color: 000000,
      title: 'User Info',
      fields: [
        {
          name: 'Name',
          value: user.tag,
          inline: true
        },
        {
          name: 'ID',
          value: user.id,
          inline: true
        },
        {
          name: 'Nickname',
          value: nick,
          inline: true
        },
        {
          name: 'Roles',
          value: roles,
          inline: true
        },
        {
          name: 'Joined Server',
          value: message.guild.members.get(user.id).joinedAt.toUTCString(),
          inline: true
        },
        {
          name: 'Joined Discord',
          value: user.createdAt.toUTCString(),
          inline: true
        },
        {
          name: 'Status',
          value: status,
          inline: true
        },
        {
          name: isStream,
          value: game,
          inline: true
        }
      ],
      thumbnail: {
        url: user.displayAvatarURL
      }
  }
  });
}});


client.on("message", message => {
        var args = message.content.split(/[ ]+/);

if(message.content.startsWith(config.prefix + 'embed')) {
     if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== config.owner) return message.reply('**You Are Missing The Permissions Manage Messages! :no_entry_sign:**');
    if (message.author == client.user) return;
message.delete();

const embed = new RichEmbed();

embed.setColor('RANDOM');
embed.setDescription(args.join(" ").substring(6));

message.channel.send({ embed });
} else
if (message.content.startsWith(config.prefix + 'serverinfo')) {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: `${message.guild.name}`,
      icon_url: message.guild.iconURL
    },
    "thumbnail": {
      "url": `${message.guild.iconURL}`
},
fields: [{
        name: "Default Guild Channel",
        value: `${message.guild.defaultChannel}`
      },
      {
        name: "Guild Owner",
        value: `${message.guild.owner}`
      },
      {
        name: "Total Amount of Members",
        value: `${message.guild.memberCount} Members in Total!`
      },
      {
 							name: "Date of the Guild was Created",
								value: `${message.guild.createdAt}`
 					},
						{
								name: "Server Region",
								value: `${message.guild.region}`
						}
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: `${message.guild.name} is a Verified Guild By ${client.user.username}!`
    }
  }
})
}});

let lonk = "none"

client.on('message', message => {
    if (message.content.startsWith(config.prefix + "bump")) {
        message.channel.sendMessage(`**Successfully Bumped __${message.guild.name}__**`)
        let bumped = client.channels.get('335779393462861825')
        lonk = message.channel.createInvite()
        var resolvedProm = Promise.resolve(lonk);
        var thenProm = resolvedProm.then(function (value) {
            console.log("" + value);

bumped.send({embed: {
    color: 0000000,
    author: {
      name: message.author.username,
      icon_url: message.author.avatarURL
},
    "thumbnail": {
      "url": `${message.guild.iconURL}`
    },
    fields: [{
        name: `__${message.guild.name}__\'s Server Invite`,
        value: `**Invite: ${value}**`
      },
      {
        name: "Member Count",
        value: `${message.guild.memberCount} Members in Total!`
      },
      {
        name: "Server Owner",
        value: `${message.guild.owner}`
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.avatarURL,
      text: `Join ${message.guild.name} today!`
    }
  }
});
	
});
    }
});


client.login(config.token);

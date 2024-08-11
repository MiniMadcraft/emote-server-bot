const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require("./config.json")
const prefix = config.prefix
const got = require('got');
const dayjs = require('dayjs')
dayjs().format()

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if (command === '8ball') {
		client.commands.get('8ball').execute(message, args, Discord, client);
	} else if (command === 'avatar') {
		client.commands.get('avatar').execute(message, args, Discord, client);
	} else if (command === 'ban') {
		client.commands.get('ban').execute(message, args, Discord, client);
	} else if (command === 'botinfo') {
		client.commands.get('botinfo').execute(message, args, Discord, client);
	} else if (command === 'bruh') {
		client.commands.get('bruh').execute(message, args, Discord, client);
	} else if (command === 'dog') {
		client.commands.get('dog').execute(message, args, Discord, client);
	} else if (command === 'help') {
		client.commands.get('help').execute(message, args, Discord, client);
	} else if (command === 'hug') {
		client.commands.get('hug').execute(message, args, Discord, client);
	} else if (command === 'josh') {
		client.commands.get('josh').execute(message, args, Discord, client);
	} else if (command === 'kick') {
		client.commands.get('kick').execute(message, args, Discord, client);
	} else if (command === 'noob') {
		client.commands.get('noob').execute(message, args, Discord, client);
	} else if (command === 'ping') {
		client.commands.get('ping').execute(message, args, Discord, client);
	} else if (command === 'helpfun') {
		client.commands.get('helpfun').execute(message, args, Discord, client);
	} else if (command === 'helpmod') {
		client.commands.get('helpmod').execute(message, args, Discord, client);
	} else if (command === 'bomb') {
		client.commands.get('bomb').execute(message, args, Discord, client);
	} else if (command === 'helpother') {
		client.commands.get('helpother').execute(message, args, Discord, client);
	} else if (command === 'meme') {
		client.commands.get('meme').execute(message, args, Discord, client, got);
	} else if (command === 'guessnumber') {
		client.commands.get('guessnumber').execute(message, args, Discord, client);
	} else if (command === 'rps') {
		client.commands.get('rps').execute(message, args, Discord, client);
	} else if (command === `say`) {
    console.log();
  } else if (command === `die`) {
    console.log();
  } else {
		client.commands.get('notrecognised').execute(message, args, Discord, client);
  }
});

client.login(config.token)

client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity(`You | !help | Prefix = !`, { type: "WATCHING"}).catch(console.error)
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  let args = message.content.substring(prefix.length).split(" ");

  if (args[0].includes('.gg')) {
    message.delete()
    const myEmbed = new Discord.MessageEmbed()
              .setTitle("**No invite links allowed!**")
              .setFooter("Emote Server Bot by Joshua")
  
          message.channel.send(myEmbed);
      }
});

client.on("message", (message) => {
  if (message.content.startsWith(`!say`)) {
      if (message.channel.id == 852253831798063104) {
      const sayMessage = message.content.split(' ').slice(1).join(' ');

      message.channel.send(sayMessage);
      }
    }
});

client.on("message", (message) => {
  if (message.content.startsWith(`!die`)) {
      message.channel.send("ok g").then(() => {
      client.destroy()
    })}
});
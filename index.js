const dotenv = require('dotenv');
const badwordsArray = require('badwords/array')

// require the needed discord.js classes
const { Client, Intents } = require('discord.js');

// create a new Discord client
const client = new Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on("message", msg => {
	newMsg = msg.content.toLowerCase()
	if (newMsg === "ping") {
		console.log(msg)
	  msg.reply("pong");
	} else if (newMsg === "shit") {
		msg.reply("You don't say that")
	} else if (newMsg === "fuck") {
		msg.reply("I'm Walking here :fire:")
	} else if (newMsg === "Fuck!") {
		msg.reply("dude stop it :D")
	} else if (badwordsArray.indexOf(newMsg) > -1) {
		console.log(newMsg)
		msg.reply(`${newMsg} is a bad word`)
	}		
  })

// login to Discord with your app's token;
dotenv.config();
client.login(process.env.TOKEN);
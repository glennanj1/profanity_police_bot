const dotenv = require('dotenv');

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
	if (msg.content === "ping") {
		console.log(msg)
	  msg.reply("pong");
	} else if (msg.content === "shit") {
		msg.reply("You don't say that")
	} else if (msg.content === "fuck") {
		msg.reply("I'm Walking here :fire")
	} else if (msg.content === "Fuck!") {
		msg.reply("dude stop it :D")
	}
  })

// login to Discord with your app's token;
dotenv.config();
client.login(process.env.TOKEN);
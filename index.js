const dotenv = require('dotenv');
const badwordsArray = require('badwords/array')
const fetch = require('node-fetch');

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
	} else if (badwordsArray.indexOf(newMsg) > -1) {
		fetch(`https://v2.jokeapi.dev/joke/Any?contains=${newMsg}`).then(r => r.json()).then(joke => {
			if (joke.setup) {
				msg.reply(joke.setup)
				setTimeout(() => {
					msg.reply(joke.delivery)
				}, 7000);
			} else if (joke.joke) {
				msg.reply(joke.joke)
			} else {
				msg.reply(`${newMsg} is a bad word`)
			}
		})
	} else {
		console.log('this is not working')
	}
  })

// login to Discord with your app's token;
dotenv.config();
client.login(process.env.TOKEN);
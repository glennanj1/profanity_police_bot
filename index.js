const dotenv = require('dotenv');

// require the needed discord.js classes
const { Client, Intents } = require('discord.js');

// create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', interaction => {
	console.log(interaction);
});

client.on('interactionCreate', interaction => {
	console.log(interaction);
});

// login to Discord with your app's token;
dotenv.config();
client.login(process.env.TOKEN);
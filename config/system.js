import tmi from 'tmi.js';
import 'dotenv/config';

const client = new tmi.Client({
	options: { 
        debug: true // Enable debug mode
    },
	connection: {
        reconnect: true,
        secure: true
    },
	identity: {
		username: process.env.TWITCH_USERNAME, // Twitch username
		password: process.env.TWITCH_PASSWORD  // Twitch OAuth token
	},
	channels: [ process.env.TWITCH_PASSWORD ] // List of channels to join
});

const pkm_trainer = process.env.TWITCH_USERNAME;

export default client;
export { pkm_trainer };
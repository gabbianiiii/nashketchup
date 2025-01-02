import tmi from 'tmi.js';
import 'dotenv/config';

const client = new tmi.Client({
	options: { 
        debug: true // Enable debug mode
    },
	identity: {
		username: process.env.USERNAME, // Twitch username
		password: process.env.PASSWORD  // Twitch OAuth token
	},
	channels: [ process.env.CHANNELS ] // List of channels to join
});

export default client;
import client from "./config/system";

client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {
    if(self) return;

    if(message.toLowerCase() === '!hello') {
        client.say(channel, `@${tags.username}, heya!`);
    }
});
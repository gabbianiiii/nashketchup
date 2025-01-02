// Description: A module that allows users to catch a random pokemon.

function catchSystem(client) {
    client.on('message', (channel, tags, message, self) => {
        if(self) return;

        if(message.toLowerCase() === '!hello') {
            client.say(channel, `@${tags.username}, heya!`);
        }
    });
}

export { catchSystem };
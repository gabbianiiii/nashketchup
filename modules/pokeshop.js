// Initialize the PokéShop module
function pokeShop(client) {
    client.on('message', (channel, tags, message, self) => {
        if(self) return;

        if(message.toLowerCase() === '!heya') {
            client.say(channel, `@${tags.username}, hello!`);
        }
    });
}

export { pokeShop };
// Description: A module that allows users to catch a random pokemon.

function catchSystem(client) {
    client.on('message', (channel, tags, message, self) => {
        if(self) return;

        if(tags.username.toLowerCase() === 'pokemoncommunitygame'){
            if(message.toLowerCase() === 'selvagem apareceu') {

            }
        }
    });
}

export { catchSystem };
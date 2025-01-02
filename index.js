import client from "./config/system.js";
import { catchSystem } from "./modules/pokecatch.js";
import { pokeShop } from "./modules/pokeshop.js";

client.connect().then(() => {
    catchSystem(client);
    pokeShop(client);
}).catch(console.error);
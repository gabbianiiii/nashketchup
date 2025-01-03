import client, { pkm_trainer } from "./config/system.js";
import { catchSystem } from "./modules/pokecatch.js";
import { pokeShop } from "./modules/pokeshop.js";

client.connect().then(() => {
    catchSystem(client);
    pokeShop(client, pkm_trainer);
}).catch(console.error);
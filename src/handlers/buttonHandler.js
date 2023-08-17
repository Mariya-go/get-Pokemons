import dom from '../dom.js';
import createPokemon from '../components/createPokemon.js';
import getPokemon from '../../apis/getPokemon.js';
import createAbilities from '../components/createAbilities.js';

import createErrorMessage from '../components/createErrorMessage.js';

const buttonHandler = async () => {
    // clean page
    dom.root.innerHTML = '';

    // get pokemon input value
    let inputValue = dom.input.value;

    // processing incorrect value
    if (!inputValue) {
        const errorMessage = createErrorMessage();

        dom.root.append(errorMessage);

        return;
    }

    let pokemonIds = [];
    const splittedValue = inputValue.split(',');
    splittedValue.forEach((item) => {
        item = item.trim();
        const itemNumber = Number(item);
        if (itemNumber > 0 && itemNumber < 1011 && !Number.isNaN(itemNumber)) {
            pokemonIds.push(item);
        }
    });

    if (pokemonIds.length === 0) {
        const errorMessage = createErrorMessage();

        dom.root.append(errorMessage);

        return;
    }

    const pokemonsPromises = pokemonIds.map((id) => getPokemon(id));
    const pokemonsData = await Promise.all(pokemonsPromises);

    // create pokemons DOM
    pokemonsData.forEach((data) => {
        const pokemonDom = createPokemon(data);
        dom.root.append(pokemonDom);
    });
};

export default buttonHandler;

import { API_URL } from './config.js';
import { getJSON } from './helpers.js'; // importa la función getJSON desde helpers.js

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
    }
};

export const loadRecipe = async function(id) {
    try {
        
        const data = await getJSON(`${API_URL}${id}`);

        const { recipe } = data.data; // desestructuración -> busca la propiedad recipe dentro de data.data y la asigna a la variable recipe
        
        console.log(recipe);

        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };

        console.log(state.recipe);

    } catch (err) {
        console.error(`${err} 💥💥💥`);
        throw err;
    }
} 


export const loadSearchResults = async function (query) {
    try {

        const data = await getJSON(`${API_URL}?search=${query}`);

        state.search.query = query;

        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            };
        })

    }
    catch (err) {
        console.error(`${err} 💥💥💥💥`);
        throw err;
    }
}

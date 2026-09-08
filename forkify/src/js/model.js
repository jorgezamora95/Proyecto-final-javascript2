import { API_URL } from './config.js';
import { getJSON } from './helpers.js'; // importa la función getJSON desde helpers.js
import { RES_PER_PAGE } from './config.js';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },


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
        state.search.page = 1; // Se lo agregue porque si una busqueda tiene 10 páginas y cambias de página
        // y buscas, page se queda con el valor de la búsqueda anterior lo cual arroja no recipes found for your query

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


export const getSearchResultPage = function (
    
    page = state.search.page

) {
    page = Number(page); // Sebe de convertir a número porque state.search.page = page; lo guarda como STRING
    //lo cual al "sumar" la otra pagina lo concatena "21" en lugar de 2 + 1 
    state.search.page =page;

    const start = (page - 1) * state.search.resultsPerPage;

    const end = page * state.search.resultsPerPage;
    
    return state.search.results.slice(start,end);

}



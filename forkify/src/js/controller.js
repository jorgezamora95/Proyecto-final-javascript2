import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/SearchViews.js';
import resultsView from './views/ResultsView.js';


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);

  }
  catch (err) {
    recipeView.renderError();
    throw err;
  }
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();

async function controlSearchResults() {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    await model.loadSearchResults(query);
    
    resultsView.render(model.state.search.results);
    
  }
  catch(err) {
    console.log(err);
  }
}


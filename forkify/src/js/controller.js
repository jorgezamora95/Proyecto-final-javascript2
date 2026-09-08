import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/SearchViews.js';
import resultsView from './views/ResultsView.js';
import paginationView from './views/paginationViews.js'


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
  paginationView.addHandlerSearch(controlPagination);
}

init();

async function controlSearchResults() {
  try {

    const query = searchView.getQuery();
    if(!query) return;
    
    resultsView.renderSpinner();

    await model.loadSearchResults(query);
    
    resultsView.render(model.getSearchResultPage());
    paginationView.render(model.state.search);
    
  }
  catch(err) {
    console.log(err);
  }
}


async function controlPagination(goToPage) {
  resultsView.render(model.getSearchResultPage(goToPage));
  paginationView.render(model.state.search);
}

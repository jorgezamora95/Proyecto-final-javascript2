import * as model from './model.js';
import recipeView from './views/RecipeView.js';


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;

    recipeView.renderSpinner();
    
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);

  }
  catch (error) {
    console.error(error);
  }
}

// function renderSpinner(parentEl) {
//   const markup = `
//       <div class="spinner">
//         <svg>
//           <use href="${icons}#icon-loader"></use>
//         </svg>
//       </div>
//     `;
//   parentEl.innerHTML = '';
//   parentEl.insertAdjacentHTML('afterbegin', markup);
// }

['hashchange', 'load'].forEach(ev => {
  window.addEventListener(ev, controlRecipes);
}); 

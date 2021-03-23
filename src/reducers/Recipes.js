import { LOAD_RECIPES, ADD_RECIPE, LIKE_RECIPE } from '../actions/actionTypes'

function recipesReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_RECIPES:
            return action.recipes
        case ADD_RECIPE:
            return [action.recipe, ...state]
        case LIKE_RECIPE:
            console.log('state', action.id)
            return state.map(recipe => (recipe.id === action.id) ? {...recipe, likes: recipe.likes +1 } : null )
        default:
            return state

    }
}

export default recipesReducer
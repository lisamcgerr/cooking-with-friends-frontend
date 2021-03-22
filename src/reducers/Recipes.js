import { LOAD_RECIPES, ADD_RECIPE } from '../actions/actionTypes'

function recipesReducer(state = [], action) 
{
    switch(action.type) {
        //used to be called LOAD_RECIPES 
        case LOAD_RECIPES:
            return action.recipes
        case ADD_RECIPE:
            return [action.recipe, ...state]
        default:
            return state

    }
}

export default recipesReducer
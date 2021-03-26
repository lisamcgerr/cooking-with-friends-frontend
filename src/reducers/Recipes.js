import { ADD_RECIPE, LIKE_RECIPE, LOAD_RECIPES } from '../actions/actionTypes'

function recipesReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_RECIPES:
            return action.recipes
        case ADD_RECIPE:
            return [action.recipe, ...state]
        case LIKE_RECIPE:
            //debugger
            return state.map(r => {
                if (r.id === action.recipe.id){
                   return {...action.recipe}
                 } else { 
                  return r }
               })
        default:
            return state

    }
}

export default recipesReducer
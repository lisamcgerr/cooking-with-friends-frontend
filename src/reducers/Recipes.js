import { LOAD_RECIPES } from '../actions/actionTypes'

function recipesReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_RECIPES:
            return action.recipes
        // case ADD_RECIPE:
        //     return 
        default:
            return state

    }
}

export default recipesReducer
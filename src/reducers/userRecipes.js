import { LOGIN_SUCCESS } from '../actions/actionTypes'

function userRecipesReducer(state = [], action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
            return action.user.recipes
        default:
            return state

    }
}

export default userRecipesReducer
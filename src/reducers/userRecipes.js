import { LOGIN_SUCCESS, CURRENT_USER } from '../actions/actionTypes'

function userRecipesReducer(state = [], action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
        case CURRENT_USER:   
            return action.user.recipes
        default:
            return state

    }
}

export default userRecipesReducer
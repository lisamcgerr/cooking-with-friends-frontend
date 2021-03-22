import { LOGIN_SUCCESS, CURRENT_USER } from '../actions/actionTypes'

function cookingSessionsReducer(state = null, action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
        case CURRENT_USER:   
            return action.user.cooking_sessions
        default:
            return state

    }
}

export default cookingSessionsReducer
import { LOGIN_SUCCESS } from '../actions/actionTypes'

function cookingSessionsReducer(state = null, action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
            return action.user.cooking_sessions
        default:
            return state

    }
}

export default cookingSessionsReducer
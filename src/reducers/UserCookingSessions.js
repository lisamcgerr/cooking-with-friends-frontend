import { LOGIN_SUCCESS, CURRENT_USER, CREATE_COOKING_SESSION } from '../actions/actionTypes'

function userCookingSessionsReducer(state = null, action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
        case CURRENT_USER:   
            return action.user.cooking_sessions
        // case CREATE_COOKING_SESSION:   
        //     return [action.user.cooking_sessions, ...state]
        default:
            return state

    }
}

export default userCookingSessionsReducer
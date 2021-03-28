import { LOGIN_SUCCESS, CURRENT_USER, LOGOUT } from '../actions/actionTypes'

function userCookingSessionsReducer(state = null, action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
        case CURRENT_USER:   
            return action.user.cooking_sessions
        case LOGOUT:
            return null
        default:
            return state

    }
}

export default userCookingSessionsReducer
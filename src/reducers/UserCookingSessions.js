import { DELETE_COOKING_SESSION, CREATE_USER_COOKING_SESSION, LOGIN_SUCCESS, CURRENT_USER, LOGOUT, CREATE_COOKING_SESSION } from '../actions/actionTypes'

function userCookingSessionsReducer(state = null, action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
        case CURRENT_USER:   
            return action.user.cooking_sessions
        case CREATE_COOKING_SESSION:   
            return [action.cooking_session, ...state]
        case CREATE_USER_COOKING_SESSION:   
            return [action.cooking_session, ...state]
        case DELETE_COOKING_SESSION:
            return state.filter(cs => cs.id !== action.id)
        case LOGOUT:
            return null
        default:
            return state

    }
}

export default userCookingSessionsReducer
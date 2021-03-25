import { LOGIN_SUCCESS, CURRENT_USER, JOIN_A_CLASS } from '../actions/actionTypes'

function userSessionsReducer(state = [], action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
        case CURRENT_USER:   
            return action.user.user_sessions
        case JOIN_A_CLASS:
            return [action.user_session, ...state]
        default:
            return state

    }
}

export default userSessionsReducer
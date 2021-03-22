import { LOGIN_SUCCESS, CURRENT_USER } from '../actions/actionTypes'

function userSessionsReducer(state = [], action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
        case CURRENT_USER:   
            return action.user.user_sessions
        default:
            return state

    }
}

export default userSessionsReducer
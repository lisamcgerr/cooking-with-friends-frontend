import { LOGIN_SUCCESS } from '../actions/actionTypes'

function userSessionsReducer(state = [], action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
            return action.user.user_sessions
        default:
            return state

    }
}

export default userSessionsReducer
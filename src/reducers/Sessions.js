import { LOAD_SESSIONS, ADD_SESSION } from '../actions/actionTypes'

function sessionsReducer (state = [], action) 
{
    switch(action.type) {
        case LOAD_SESSIONS:
            return action.user_sessions
        case ADD_SESSION:
            return [action.user_session, ...state]
        default:
            return state

    }
}

export default sessionsReducer 
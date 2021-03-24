import { LOAD_SESSIONS, CREATE_USER_SESSION} from '../actions/actionTypes'

function sessionsReducer (state = [], action) 
{
    switch(action.type) {
        case LOAD_SESSIONS:
            return action.user_sessions
        case CREATE_USER_SESSION:
            return [action.user_session, ...state]
        default:
            return state

    }
}

export default sessionsReducer 
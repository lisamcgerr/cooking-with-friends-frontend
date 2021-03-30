import { DELETE_COOKING_SESSION, LOAD_COOKING_SESSIONS, CREATE_COOKING_SESSION } from '../actions/actionTypes'

function cookingSessionsReducer(state = null, action) 
{
    switch(action.type) {
        case LOAD_COOKING_SESSIONS:
            return action.cooking_sessions
        case CREATE_COOKING_SESSION:   
            return [action.cooking_session, ...state]
        case DELETE_COOKING_SESSION:
            return state.filter(cs => cs.id !== action.id)
        default:
            return state

    }
}

export default cookingSessionsReducer
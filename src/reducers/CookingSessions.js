import { LOAD_COOKING_SESSIONS, CREATE_COOKING_SESSION } from '../actions/actionTypes'

function cookingSessionsReducer(state = null, action) 
{
    switch(action.type) {
        case LOAD_COOKING_SESSIONS:
            return action.cooking_sessions
        case CREATE_COOKING_SESSION:   
            return [action.cooking_sessions, ...state]
        default:
            return state

    }
}

export default cookingSessionsReducer
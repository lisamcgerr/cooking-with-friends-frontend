import { ADD_CREATED, DELETE_COOKING_SESSION, LOAD_COOKING_SESSIONS, CREATE_COOKING_SESSION } from '../actions/actionTypes'

function cookingSessionsReducer(state = null, action) 
{
    switch(action.type) {
        case LOAD_COOKING_SESSIONS:
            return action.cooking_sessions
        case CREATE_COOKING_SESSION:   
            return [...state, action.cooking_session]
        case DELETE_COOKING_SESSION:
            return state.filter(cs => cs.id !== action.id)
        // case ADD_CREATED:
        //     debugger
        //     return state.map(cooking_session => {
        //         if (cooking_session.id === action.cooking_session.id){
        //            return {...action.cooking_session}
        //          } else { 
        //           return cooking_session }
        //        })
        default:
            return state

    }
}

export default cookingSessionsReducer
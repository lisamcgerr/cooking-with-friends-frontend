import { ADD_USER } from '../actions/actionTypes'

function usersReducer(state = [], action) 
{
    switch(action.type) {
        case ADD_USER:
            return [action.user, ...state]
        default:
            return state

    }
}

export default usersReducer
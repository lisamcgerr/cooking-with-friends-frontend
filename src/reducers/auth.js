import { LOGIN_SUCCESS } from '../actions/actionTypes'

function authReducer(state = null, action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                id: action.user.id,
                username: action.user.username,
                first_name: action.user.first_name,
                last_name: action.user.last_name,
                email: action.user.email,
                bio: action.user.bio }
        default:
            return state

    }
}

export default authReducer
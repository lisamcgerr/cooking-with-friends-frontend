import { LOGIN_SUCCESS, CURRENT_USER, LOGOUT } from '../actions/actionTypes'

function authReducer(state = null, action) 
{
    switch(action.type) {
        case LOGIN_SUCCESS:
        case CURRENT_USER:   
            return {
                id: action.user.id,
                username: action.user.username,
                first_name: action.user.first_name,
                last_name: action.user.last_name,
                email: action.user.email,
                bio: action.user.bio,
                image: action.user.image }
                // remove more components in the reducer
                // user_cs: action.user.cooking_sessions,
                // user_us: action.user.user_sessions }
        case LOGOUT:
            return null
        default:
            return state

    }
}

export default authReducer
import { CREATE_USER_COOKING_SESSION, LOGOUT, LOAD_COMMENTS, LOAD_RECIPES, ADD_RECIPE, LOGIN_SUCCESS, CURRENT_USER, ADD_USER, LOAD_USERS, CREATE_COOKING_SESSION, LIKE_RECIPE, LOAD_COOKING_SESSIONS, LOAD_SESSIONS, CREATE_USER_SESSION, JOIN_A_CLASS } from './actionTypes'

export function loadRecipes(recipes){
    return{
        type: LOAD_RECIPES,
        recipes: recipes
    }
}

export function loadComments(comments){
    return{
        type: LOAD_COMMENTS,
        comments: comments
    }
}

export function loadCookingSessions(cooking_sessions){
    return{
        type: LOAD_COOKING_SESSIONS,
        cooking_sessions: cooking_sessions
    }
}

export function loadSessions(user_sessions){
    return{
        type: LOAD_SESSIONS,
        user_sessions: user_sessions
    }
}

export function addRecipe(recipe){
    return {
        type: ADD_RECIPE,
        recipe: recipe
    }
}

export function loginSuccess(user){
    return {
        type: LOGIN_SUCCESS,
        user: user
    }
}

export function logout(user){
    return {
        type: LOGOUT,
        user: user
    }
}

export function currentUser(user){
    return {
        type: CURRENT_USER,
        user: user
    }
}

export function addUser(user){
    return{
        type: ADD_USER,
        user: user
    }
}

export function loadUsers(users){
    return{
        type: LOAD_USERS,
        users: users
    }
}

export function createCookingSession(cooking_session){
    return{
        type: CREATE_COOKING_SESSION,
        cooking_session: cooking_session
    }
}
export function createUserCookingSession(cooking_session){
    return{
        type: CREATE_USER_COOKING_SESSION,
        cooking_session: cooking_session
    }
}

export function joinAClass(user_session){
    return{
        type: JOIN_A_CLASS,
        user_session: user_session
    }
}

export function createUserSession(user_session){
    return{
        type: CREATE_USER_SESSION,
        user_session: user_session
    }
}

export function updateLikes(recipe){
    return{
        type: LIKE_RECIPE,
        recipe: recipe
    }
}
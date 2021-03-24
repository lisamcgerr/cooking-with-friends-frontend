import {LOAD_RECIPES, ADD_RECIPE, LOGIN_SUCCESS, CURRENT_USER, ADD_USER, LOAD_USERS, CREATE_COOKING_SESSION, LIKE_RECIPE, LOAD_COOKING_SESSIONS, LOAD_SESSIONS, ADD_SESSION } from './actionTypes'

export function loadRecipes(recipes){
    return{
        type: LOAD_RECIPES,
        recipes: recipes
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

export function updateLikes(id){
    return{
        type: LIKE_RECIPE,
        id: id
    }
}
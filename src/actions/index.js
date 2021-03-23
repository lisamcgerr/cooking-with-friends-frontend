import {LOAD_RECIPES, ADD_RECIPE, LOGIN_SUCCESS, CURRENT_USER, ADD_USER, LOAD_USERS, CREATE_COOKING_SESSION, LIKE_RECIPE } from './actionTypes'

export function loadRecipes(recipes){
    return{
        type: LOAD_RECIPES,
        recipes: recipes
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

export function createCookingSession(cooking_sessions){
    return{
        type: CREATE_COOKING_SESSION,
        cooking_sessions: cooking_sessions
    }
}

export function updateLikes(id){
    return{
        type: LIKE_RECIPE,
        id: id
    }
}
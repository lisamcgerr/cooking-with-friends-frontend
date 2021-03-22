import {LOAD_RECIPES, ADD_RECIPE, LOGIN_SUCCESS, CURRENT_USER, ADD_USER } from './actionTypes'

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



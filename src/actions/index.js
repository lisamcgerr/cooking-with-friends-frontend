import {LOAD_RECIPES, ADD_RECIPE, LOGIN_SUCCESS} from './actionTypes'

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




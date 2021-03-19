import {LOAD_RECIPES, ADD_RECIPE} from './actionTypes'

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




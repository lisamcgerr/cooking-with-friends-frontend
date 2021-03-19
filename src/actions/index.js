import {LOAD_RECIPES} from './actionTypes'

export function loadRecipes(recipes){
    return{
        type: LOAD_RECIPES,
        recipes: recipes
    }
}




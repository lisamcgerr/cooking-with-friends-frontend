import {combineReducers} from 'redux'
import recipesReducer from './Recipes'
import authReducer from './auth'
import cookingSessionsReducer from './CookingSessions'
import userSessionsReducer from './UserSessions'
import userRecipesReducer from './userRecipes'


const rootReducer = combineReducers({
    recipes: recipesReducer,
    auth: authReducer,
    cooking_sessions: cookingSessionsReducer,
    user_sessions: userSessionsReducer,
    user_recipes: userRecipesReducer
})

export default rootReducer



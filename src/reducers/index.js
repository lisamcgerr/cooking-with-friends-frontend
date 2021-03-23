import {combineReducers} from 'redux'
import recipesReducer from './Recipes'
import authReducer from './auth'
import cookingSessionsReducer from './CookingSessions'
import userSessionsReducer from './UserSessions'
import userRecipesReducer from './userRecipes'
import loadUsersReducer from './loadUsers'


const rootReducer = combineReducers({
    recipes: recipesReducer,
    auth: authReducer,
    cooking_sessions: cookingSessionsReducer,
    user_sessions: userSessionsReducer,
    user_recipes: userRecipesReducer, 
    users: loadUsersReducer
})

export default rootReducer



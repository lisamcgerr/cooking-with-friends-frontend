import {combineReducers} from 'redux'
import recipesReducer from './Recipes'
import authReducer from './auth'
import userCookingSessionsReducer from './UserCookingSessions'
import userSessionsReducer from './UserSessions'
import userRecipesReducer from './userRecipes'
import loadUsersReducer from './loadUsers'
import cookingSessionsReducer from './CookingSessions'
import sessionsReducer from './Sessions'



const rootReducer = combineReducers({
    recipes: recipesReducer,
    auth: authReducer,
    user_cooking_sessions: userCookingSessionsReducer,
    user_sessions: userSessionsReducer,
    user_recipes: userRecipesReducer, 
    users: loadUsersReducer,
    cooking_sessions: cookingSessionsReducer,
    sessions: sessionsReducer
})

export default rootReducer



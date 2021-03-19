//import React from 'react'
import {combineReducers} from 'redux'
import recipesReducer from './Recipes'
import authReducer from './auth'
//import others reducers here

const rootReducer = combineReducers({
    recipes: recipesReducer,
    auth: authReducer
    // cooking_sessions: cookingSessionsReducer,
    // user_sessions: userSessionsReducer
})

export default rootReducer



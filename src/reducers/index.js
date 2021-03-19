//import React from 'react'
import {combineReducers} from 'redux'
import recipesReducer from './Recipes'
//import others reducers here

const rootReducer = combineReducers({
    recipes: recipesReducer
    // , user: usersReducer,
    // cooking_sessions: cookingSessionsReducer,
    // user_sessions: userSessionsReducer
})

export default rootReducer



import React from 'react'
import { connect } from 'react-redux'
import MyClassesCard from './MyClasses'

class MyClassesContainer extends React.Component {

    renderMyClasses = () => {
        return this.props.cooking_sessions.map(cookingSessionObj => (
            <MyClassesCard
                key={cookingSessionObj.id}
                cookingSession={cookingSessionObj}
            />
        ))
    }

    renderMyRecipes = () => {
        return this.props.user_recipes.map(userRecipeObj => (
            <MyClassesCard
                key={userRecipeObj.id}
                userRecipe={userRecipeObj}
            />
        ))
    }

    render(){
        return(
            <div>
                <h1>My Cooking Sessions</h1>
                    {this.renderMyClasses()}
                    {this.renderMyRecipes()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cooking_sessions: state.cooking_sessions,
        user_recipes: state.user_recipes
    }
}

export default connect(mapStateToProps, null)(MyClassesContainer)
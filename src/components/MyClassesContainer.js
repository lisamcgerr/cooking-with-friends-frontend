import React from 'react'
import { connect } from 'react-redux'
import MyClassesCard from './MyClasses'

class MyClassesContainer extends React.Component {

    renderMyClasses = () => {
        return this.props.cooking_sessions.map(cookingSessionObj => (
            <MyClassesCard
                key={cookingSessionObj.id}
                csTitle={cookingSessionObj.title}
                csDate={cookingSessionObj.date}
                csMeetingLink={cookingSessionObj.meeting_link}
                csRecipeId={cookingSessionObj.recipe_id}
            />
        ))
    }

    // renderMyRecipes = () => {
    //     return this.props.user_recipes.map(userRecipeObj => (
    //         <MyClassesCard
    //             key={userRecipeObj.id}
    //             userRecipeId={userRecipeObj.id}
    //             userRecipeName={userRecipeObj.name}
    //             userRecipePrepTime={userRecipeObj.prep_time}
    //             userRecipeImage={userRecipeObj.image}
    //             userRecipeLink={userRecipeObj.recipe_link}
    //             userRecipeDescription={userRecipeObj.description}
    //         />
    //     ))
    // }

    render(){
        return(
            <div>
                <h1>My Cooking Sessions</h1>
                    {this.renderMyClasses()}
                    {/* {this.renderMyRecipes()} */}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cooking_sessions: state.cooking_sessions
    }
}

export default connect(mapStateToProps, null)(MyClassesContainer)
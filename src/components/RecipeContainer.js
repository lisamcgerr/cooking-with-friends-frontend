import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'


class RecipeContainer extends React.Component {

    renderRecipes = () => {
        return this.props.recipes.map(recipeObj => (
            <RecipeCard 
              key={recipeObj.id} 
              recipe={recipeObj}  
            />
        ))
    }

    render(){
        return(
            <div>
              <h1>Recipes</h1>
                {this.renderRecipes()}
            </div>
        )
    }
}
function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}



export default connect(mapStateToProps, null)(RecipeContainer)
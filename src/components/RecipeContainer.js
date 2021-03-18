import React from 'react'
import RecipeCard from './RecipeCard'

class RecipeContainer extends React.Component {

    constructor(){
        super()
        this.state = {
          recipes: []
        }
      }
    
      componentDidMount(){
        fetch('http://localhost:3000/recipes')
        .then(resp => resp.json())
        .then(recipesData => {
          this.setState({
            recipes: recipesData
          })
        })
      }

    renderRecipes = () => {
        return this.state.recipes.map(recipeObj => {
            return <RecipeCard key={recipeObj.id} recipe={recipeObj}  />
        })
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

export default RecipeContainer
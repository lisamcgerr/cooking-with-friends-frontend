import React from 'react'
import RecipeCard from './RecipeCard'
import RecipeForm from './RecipeForm'
import { Route } from 'react-router-dom';

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

    createRecipe = (newRecipe) => {
      this.setState({
        recipes:[newRecipe, ...this.state.recipes]
      })
    }

    render(){
        return(
            <div>
                <RecipeForm  createRecipe={this.createRecipe} />
                <h1>Recipes</h1>
                {this.renderRecipes()}
                {/* <Route path="/recipes/new" render={()=><RecipeForm createRecipe={this.createRecipe}/>}/> */}
            </div>
        )
    }
}

export default RecipeContainer
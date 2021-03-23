import React from 'react'
import RecipeCard from './RecipeCard'
// import RecipeForm from './RecipeForm'
// import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import {loadRecipes} from '../actions/index'

class RecipeContainer extends React.Component {
  componentDidMount(){
    fetch('http://localhost:3000/recipes')
    .then(resp => resp.json())
    .then(recipes => {
      this.props.loadRecipes(recipes)
      //console.log(recipes)
    })
  }

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

const mapDispatchToProps = {
  loadRecipes: loadRecipes
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)
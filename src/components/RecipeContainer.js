import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { Header, Card} from 'semantic-ui-react'
import '../App.css'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'




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
          <>
          <h1 className='recipes-h1' >Recipes</h1>
          <div className='recipes-container' flexGrow={1} >
             <Grid container spacing={3} textAlign='center'>
              <Grid item xs={12}>
              </Grid>
                <Divider />
   
                    {this.renderRecipes()}

            </Grid>
          </div>
          </>

        )
    }
}
function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}



export default connect(mapStateToProps, null)(RecipeContainer)
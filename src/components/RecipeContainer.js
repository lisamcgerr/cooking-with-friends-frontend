import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { Grid, Header} from 'semantic-ui-react'



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
              <br></br>
             <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 550 }}>
                <Header as='h2' color='green' textAlign='center'>
                   Recipes
                    </Header>
                    {this.renderRecipes()}
                  </Grid.Column>
                </Grid>
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
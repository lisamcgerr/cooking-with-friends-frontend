import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { Grid, Header} from 'semantic-ui-react'
import '../App.css'




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
            // <div id='collection'>
            //   <br></br>
             <Grid className='grid-container' textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                  <Header as='h2' color='green' textAlign='center'>
                   Recipes
                  </Header>
                
                    <Grid.Column style={{ maxWidth: 550 }}>
                    {this.renderRecipes()}
                    </Grid.Column>
                </Grid>
            //</div>
        )
    }
}
function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}



export default connect(mapStateToProps, null)(RecipeContainer)
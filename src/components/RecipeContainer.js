import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { Grid, Header, Card} from 'semantic-ui-react'
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
          <div class="ui center aligned middle aligned grid" >
             <Grid divided='vertically' textAlign='center'>
               <Grid.Row columns={1} >
                  <Header as='h2' color='green' textAlign='center'>
                   Recipes
                  </Header>
                
                    <Grid.Column style={{ marginLeft: '150px', height: '100vh', paddingTop: '100px' }}>
                      <Card.Group itemsPerRow={1} >
                    {this.renderRecipes()}
                    </Card.Group>
                    </Grid.Column>
                    </Grid.Row>
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
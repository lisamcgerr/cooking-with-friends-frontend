import React from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'

class MyClassesCard extends React.Component {

//{this.props.recipes.map(recipe => recipe.id === this.props.cookingSession.recipe_id) ? recipe.image : null }

    render(){
        return(
            <Card>
            {/* <Image src={this.props.recipes.map(recipe => recipe.id === this.props.cookingSession.recipe_id) ? recipe.image : null }
 wrapped ui={false} /> */}
            <Card.Content>
              <Card.Header>{this.props.cookingSession.title}</Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.cookingSession.date}</span>
              </Card.Meta>
              <Card.Description>
                         
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                <a href={this.props.cookingSession.meeting_Link} target='blank'><strong>Click here to get your meeting started</strong></a>
              </a>
            </Card.Content>
          </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        recipes: state.recipes
    }
}

export default connect(mapStateToProps) (MyClassesCard)

//this.props.recipes.filter(recipe => recipe.id === this.props.csRecipeId)? {this.props}
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class MyClassesCard extends React.Component {

//this.props.recipes.map(recipe => recipe.id === this.props.cookingSession.recipe_id)

    render(){
        return(
            <Card>
            <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.cookingSession.title}</Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.cookingSession.date}</span>
              </Card.Meta>
              <Card.Description>
              {this.props.cookingSession.meeting_link}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {this.props.cookingSession.meeting_link}
              </a>
            </Card.Content>
          </Card>
        )
    }
}

export default MyClassesCard

//this.props.recipes.filter(recipe => recipe.id === this.props.csRecipeId)? {this.props}
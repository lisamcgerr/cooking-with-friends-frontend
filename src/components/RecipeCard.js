import React from 'react'
import { Card } from 'semantic-ui-react'

class RecipeCard extends React.Component {
    render(){
        return(
            <Card
            image={this.props.recipe.image}
            header={this.props.recipe.name}
            meta={this.props.recipe.prep_time}
            description={this.props.recipe.description}
            extra={this.props.recipe.recipe_link}
          />
        )
    }
}

export default RecipeCard
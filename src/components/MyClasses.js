import React from 'react'
import { Card } from 'semantic-ui-react'

class MyClassesCard extends React.Component {
    render(){
        return(
            <Card
            // image={this.props.}
            header={this.props.csTitle}
            meta={this.props.csDate}
            description={this.props.csMeetingLink}
            // extra={this.props.recipe.recipe_link}
          />
        )
    }
}

export default MyClassesCard

//this.props.recipes.filter(recipe => recipe.id === this.props.csRecipeId)? {this.props}
import React from 'react'
import { connect } from 'react-redux'
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
function mapStateToProps(state){
    return {
        user_recipes: state.user_recipes
    }
}

export default connect(mapStateToProps, null)(RecipeCard)
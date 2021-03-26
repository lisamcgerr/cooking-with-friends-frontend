import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon } from 'semantic-ui-react'
import { updateLikes } from '../actions/index'
import {loadRecipes} from '../actions/index'


class RecipeCard extends React.Component {

handleLikes = (e) => {
    const likes = parseInt(e.target.parentElement.innerText)
    const id = parseInt(e.target.getAttribute('id'))

    const reqObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({likes: likes + 1})
    }
    fetch(`http://localhost:3000/recipes/${id}`, reqObj)
    .then(resp => resp.json())
    .then(updatedRecipe => {
    
        console.log('updatedrecipe', updatedRecipe.id, updatedRecipe.likes)
        this.props.updateLikes(updatedRecipe)
        //this.props.history.push('/recipes')
    })


}
    
    render(){
        return(
        <div>
                <Card>
                    <Image src={this.props.recipe.image} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{this.props.recipe.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{this.props.recipe.prep_time}</span>
                    </Card.Meta>
                    <Card.Description>
                    {this.props.recipe.description}
                    </Card.Description>
                    <br></br>
                    <Card.Description>
                        <a href={this.props.recipe.recipe_link} target='blank'><strong>Recipe Ingredients and Directions Linked Here</strong></a>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {this.props.recipe.likes} likes <button id={this.props.recipe.id} onClick={this.handleLikes}> Like </button>
                    </a>
                    <br></br>
                    <button> Create a Cooking Class </button>
                    </Card.Content>
                
                </Card>
                <br></br>
        </div>
        )
    }
}
function mapStateToProps(state){
    return {
        user_recipes: state.user_recipes,
        recipes: state.recipes
    }
}

const mapDispatchToProps = {
    updateLikes: updateLikes,
    loadRecipes: loadRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard)
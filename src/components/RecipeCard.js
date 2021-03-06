import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon, Header, Button } from 'semantic-ui-react'
import { updateLikes, loadRecipes } from '../actions/index'
import RecipeCommentCard from './RecipeCommentCard'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'




class RecipeCard extends React.Component {
    constructor(){
        super()
        this.state = {
            showComments: false
        }
    }

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

renderComments = () => {
    return this.props.recipe.comments.map(comment => (
        <RecipeCommentCard 
          key={comment.id} 
          comment={comment}  
        />
    ))
}

handleToggleComments = () => {
    this.setState({
        showComments: !this.state.showComments
    })
}

handleCreateComment = (e) => {
    e.preventDefault()
    return <Link to='/createcomment'></Link>
}


    
    render(){
        return(


        <Grid textAlign='center' item xs={3}>
                <Card className="card" >
                    <Image className='recipe-image' src={this.props.recipe.image} wrapped ui={false} />
                    <Card.Content textAlign='center'>
                    <Card.Header textAlign='center'>{this.props.recipe.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{this.props.recipe.prep_time}</span>
                    </Card.Meta>
                    <Card.Description textAlign='center'>
                    {this.props.recipe.description}
                    </Card.Description>
                    <br></br>
                    <Card.Description textAlign='center'>
                        <a href={this.props.recipe.recipe_link} target='blank'><strong>Recipe Link Here</strong></a>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content textAlign='center' extra>
                    <>
                        <Icon name='heart' /> {this.props.recipe.likes} likes <Button color='green'  id={this.props.recipe.id} onClick={this.handleLikes}> Like </Button>
                    </>
                    <br></br>
                    </Card.Content>
                    <Header textAlign='center' as='h3' dividing>
                        <Button textAlign='center' onClick={this.handleToggleComments} >Display Comments</Button>
                        <br></br>
                        <br></br>
                        {/* <Button textAlign='center' onClick={this.handleCreateComment} >Leave Comment</Button> */}

                    </Header>
                        {this.state.showComments ? this.renderComments() : null}
                        <br></br>
                </Card>

        </Grid>

        

        
        // <div className="gallery">
        //     <img src={this.props.recipe.image} alt={this.props.recipe.name}/>
            
        //     <h2>{this.props.recipe.name}</h2>
        //     <p>
        //         <span className='date'>{this.props.recipe.prep_time}</span>
        //     </p>
        //     <div className='desc'>
        //     {this.props.recipe.description}
        //     </div>
        //     <br></br>
        //         <a href={this.props.recipe.recipe_link} target='blank'><strong>Recipe Ingredients and Directions Linked Here</strong></a>

            
        //     <div>
        //     <>
        //         <Icon name='heart' /> {this.props.recipe.likes} likes <button id={this.props.recipe.id} onClick={this.handleLikes}> Like </button>
        //     </>
        //     <br></br>
        //     </div>
        
        // </div>
            // <Header as='h3'>
            //     Comments
            // </Header>
            //     {this.renderComments()}

    
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
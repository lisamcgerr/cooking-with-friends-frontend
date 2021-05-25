import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/index'
import { Grid, Form, Button, Segment } from 'semantic-ui-react'

class CreateComment extends React.Component {

    state = {
        post: '',
        user_id: '',
        recipe_id: ''
    }

    handleInput = (e) => {
        this.setState({
            post: e.target.value,
            user_id: this.props.auth.id
        })
    }

    handleChangeRecipe = (e) => {
        this.setState({
            recipe_id: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newComment = {...this.state}
        console.log(newComment)

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({comment: newComment})
        }
        fetch('http://localhost:3000/comments', reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.createComment(data)
            //push comment to page
            this.props.history.push('/recipes')
        })
    }

    render(){
        return(
            <> 
                <br></br>
                <br></br>
                <br></br>
                <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 550 }}>
                <h1 className='login-h1'>Leave a Review</h1>
                    <Form onSubmit={this.handleSubmit} inverted sixe='large'>
                    <Segment inverted stacked>
                        <Form.Input fluid 
                        name='post'
                        type='text'
                        value={this.state.post}
                        onChange={this.handleInput}
                        placeholder='leave review here'
                        />
                        <Form.Input>
                        <select name='recipe_id' value={this.state.recipe_id} onChange={this.handleChangeRecipe}>
                            {this.props.recipes.map((recipe) => {
                             return <option value={recipe.id}>{recipe.name}</option>;
                             })}
                        </select>
                    </Form.Input>
                    </Segment> 
                    </Form>
                    <Button color='green' fluid size='large'>Submit</Button>
                    </Grid.Column>
                </Grid>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        recipes: state.recipes
    }
}

const mapDispatchToProps = {
    createComment: createComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)
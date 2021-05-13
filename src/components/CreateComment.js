import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/index'
import { Grid, Form, Button } from 'semantic-ui-react'

class CreateComment extends React.Component {


    //grab the id of the recipe off the button -- check class names
    state = {
        post: '',
        user_id: '',
        recipe_id: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.post]: e.target.value,
            user_id: this.props.auth.id,
            recipe_id: this.props.recipe.id
        })
    }

    //fetch request tolocalhost3001/comments
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
                <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                    <Form onSubmit={this.handleSubmit} inverted sixe='large'>
                        <Form.Input fluid 
                        icon = ''
                        iconPosition='left'
                        name='post'
                        type='text'
                        value={this.state.post}
                        onChange={this.handleInput}
                        placeholder='leave comment here'
                        />
                    </Form>
                    <Button color='green' fluid size='large'>Submit</Button>
                </Grid>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

const mapDispatchToProps = {
    createComment: createComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)
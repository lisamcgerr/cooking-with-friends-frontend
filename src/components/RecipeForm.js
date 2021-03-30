import React from 'react'
//import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addRecipe } from '../actions/index'
import { Button, Form, Grid, Header, Segment} from 'semantic-ui-react'

class RecipeForm extends React.Component {
   state = {
        name: '',
        description: '',
        prep_time: '',
        recipe_link: '',
        image: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newRecipe = {...this.state, likes: 0}

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(newRecipe)
        }
        fetch('http://localhost:3000/recipes', reqObj)
        .then(resp => resp.json())
        .then(newRecipe => {
          this.props.addRecipe(newRecipe)
          this.props.history.push('/recipes')
        })
    }

    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
             <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 550 }}>
                <Header as='h1' color='green' textAlign='center'>
                   Add a Recipe
                    </Header>
                <Form onSubmit={this.handleSubmit} size='large'>
                    <Segment inverted stacked>
                    <Form.Input>
                       
                        <input name='name' type= 'text' value={this.state.name} onChange={this.handleChange} placeholder='name of recipe' />
                    </Form.Input>

                    <Form.Input>
                        
                        <textarea name='description' type= 'text' value={this.state.description} onChange={this.handleChange} placeholder='description' />
                    </Form.Input>

                    <Form.Input>
                        
                        <input name='prep_time' type= 'text' value={this.state.prep_time} onChange={this.handleChange} placeholder='preparation time' />
                    </Form.Input>

                    <Form.Input>
                      
                        <input name='recipe_link' type= 'url' value={this.state.recipe_link} onChange={this.handleChange} placeholder='recipe link' />
                    </Form.Input>

                    <Form.Input>
                     
                        <input name='image' type= 'url' value={this.state.image} onChange={this.handleChange} placeholder='image link' />
                    </Form.Input>
                    <Button color='green' fluid size='large' type='submit'>Submit</Button>
                
                </Segment>
                </Form>
                </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addRecipe: addRecipe
}

export default connect(null, mapDispatchToProps)(RecipeForm)
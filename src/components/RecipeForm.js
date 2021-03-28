import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addRecipe } from '../actions/index'

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
                <h1>Add a new Recipe</h1>
                <form onSubmit={this.handleSubmit} >
                    <Form.Field>
                        <label>Name: </label>
                        <input name='name' type= 'text' value={this.state.name} onChange={this.handleChange} placeholder='name' />
                    </Form.Field>

                    <Form.Field>
                        <label>Description: </label>
                        <input name='description' type= 'text' value={this.state.description} onChange={this.handleChange} placeholder='description' />
                    </Form.Field>

                    <Form.Field>
                        <label>Prepration Time: </label>
                        <input name='prep_time' type= 'text' value={this.state.prep_time} onChange={this.handleChange} placeholder='preparation time' />
                    </Form.Field>

                    <Form.Field>
                        <label>Recipe Link: </label>
                        <input name='recipe_link' type= 'url' value={this.state.recipe_link} onChange={this.handleChange} placeholder='recipe link' />
                    </Form.Field>

                    <Form.Field>
                        <label>Image: </label>
                        <input name='image' type= 'text' value={this.state.image} onChange={this.handleChange} placeholder='image link' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addRecipe: addRecipe
}

export default connect(null, mapDispatchToProps)(RecipeForm)
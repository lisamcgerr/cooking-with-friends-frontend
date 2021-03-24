import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createCookingSession } from '../actions'

class ClassForm extends React.Component {
    state = {
        title: '',
        date: '',
        meeting_link: '',
        recipe_id: ''
        // host_id: this.props.auth.id
    }

    handleChange = (e) => {
        console.log( 'handle change data', e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeRecipe = (e) => {
        console.log( 'recipe data', e.target.value)
        this.setState({
            recipe_id: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const id = this.props.auth.id
        //console.log('id', this.props.auth.id)

        const newCookingSession = {...this.state, host_id: id}

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify({cooking_session: newCookingSession})
        }

        fetch('http://localhost:3000/cooking_sessions', reqObj)
        .then(resp => resp.json())
        .then(newCookingSession => {
            //console.log('data', newCookingSession)
            //debugger
          this.props.createCookingSession(newCookingSession)
          console.log('created session', newCookingSession)
          this.props.history.push('/myclasses')
        })
    }


    handleChangeRecipe = (e) => {
        console.log( 'recipe data', e.target.value)
        this.setState({
            recipe_id: e.target.value
        })
    }



    render(){
        return(
            <div>
                <h1>Create a cooking Class with your friends</h1>
                <form onSubmit={this.handleSubmit} >
                    <Form.Field>
                        <label>Cooking Session Title</label>
                        <input name='title' type= 'text' value={this.state.title} onChange={this.handleChange} placeholder='title' />
                    </Form.Field>

                    <Form.Field>
                        <label>Date: </label>
                        <input name='date' type= 'datetime-local' value={this.state.date} onChange={this.handleChange} />
                    </Form.Field>

                    <Form.Field>
                        <label>Recipe: </label>
                        <select name='recipe_id' value={this.state.recipe_id} onChange={this.handleChangeRecipe}>
                            {this.props.recipes.map((recipe) => {
                             return <option value={recipe.id}>{recipe.name}</option>;
                             })}
                        </select>
                    </Form.Field>

                    <Form.Field>
                        <label>Meeting Link: </label>
                        <input name='meeting_link' type= 'url' value={this.state.meeting_link} onChange={this.handleChange} placeholder='meeting link' />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                </form>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        recipes: state.recipes,
        auth: state.auth
    }
}

const mapDispatchToProps = {
    createCookingSession: createCookingSession
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm)
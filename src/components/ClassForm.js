import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createCookingSession } from '../actions'

class ClassForm extends React.Component {
    state = {
        title: '',
        date: '',
        meeting_link: '',
        recipe_id: '',
        host_id: this.props.auth.id,
        public: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newCookingSession = {...this.state}

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(newCookingSession)
        }

        fetch('http://localhost:3000/recipes', reqObj)
        .then(resp => resp.json())
        .then(newCookingSession => {
          this.props.createCookingSession(newCookingSession)
          //this.props.history.push('/myclasses')
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

                    {/* <Form.Field>
                        <label>Time: </label>
                        <input name='date' type= 'date' format="HH:mm:ss" value={this.state.date} onChange={this.handleChange} />
                    </Form.Field> */}

                    <Form.Field>
                        <label>Meeting Link: </label>
                        <input name='meeting_link' type= 'url' value={this.state.meeting_link} onChange={this.handleChange} placeholder='meeting link' />
                    </Form.Field>

                    <Form.Field>
                        <label>Select a recipe: </label>
                        <input name='recipe_id' type= 'text' value={this.state.recipe_id} onChange={this.handleChange} placeholder='recipe link' />
                    </Form.Field>

                    <Form.Field>
                        <label>Public Session: </label>
                        <input name='public' type= 'checkbox' value={this.state.public} onChange={this.handleChange} placeholder='image link' />
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
import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createCookingSession, createUserSession, loadSessions, currentUser } from '../actions'

class ClassForm extends React.Component {
    state = {
        title: '',
        date: '',
        meeting_link: '',
        recipe_id: '',
       
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeSession =  (e) => {
        this.setState({
            user_id: e.target.value
        })
    }

    handleChangeRecipe = (e) => {
        this.setState({
            recipe_id: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const id = this.props.auth.id
        const newCookingSession = {...this.state, host_id: id}

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(newCookingSession)
        }

        fetch('http://localhost:3000/cooking_sessions', reqObj)
        .then(resp => resp.json())
        .then(newCookingSession => {
            console.log('data new cooking session', newCookingSession)
            this.props.createCookingSession(newCookingSession)
        })
    }


    componentDidUpdate(prevState, _){
        if (this.props.cooking_sessions.length !== prevState.cooking_sessions.length ){
            fetch('http://localhost:3000/user_sessions')
            .then(resp => resp.json())
            .then(user_sessions => {
              this.props.loadSessions(user_sessions)
            })  
            
            const token = localStorage.getItem('myAppToken')

            const reqObj = {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }      
              fetch('http://localhost:3000/profile', reqObj)
              .then(resp => resp.json())
              .then(data => {
                this.props.currentUser(data)
                this.props.history.push('/myclasses')
              })

        } else {
            console.log('no')
        }
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
        auth: state.auth,
        users: state.users,
        cooking_sessions: state.cooking_sessions
    }
}

const mapDispatchToProps = {
    createCookingSession: createCookingSession,
    createUserSession: createUserSession,
    loadSessions: loadSessions,
    currentUser: currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm)
import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createCookingSession, createUserSession } from '../actions'

class ClassForm extends React.Component {
    state = {
        title: '',
        date: '',
        meeting_link: '',
        recipe_id: '',
        // host_id: this.props.auth.id
    }

    handleChange = (e) => {
        //console.log( 'handle change data', e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeSession =  (e) => {
        //console.log( 'handle change data', e.target.value)
        this.setState({
            user_id: e.target.value
        })
    }

    handleChangeRecipe = (e) => {
        //console.log( 'recipe data', e.target.value)
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
            body:  JSON.stringify(newCookingSession)
        }

        fetch('http://localhost:3000/cooking_sessions', reqObj)
        .then(resp => resp.json())
        .then(newCookingSession => {
            console.log('data', newCookingSession)
            //debugger
          this.props.createCookingSession(newCookingSession)
         
// ----------------------------second fetch request--------------------------------
        const cookingSessionId = newCookingSession.id
        const newUserSession = {user_id: id, cooking_session_id: cookingSessionId}

        const reqObjSess = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(newUserSession)
        }

          fetch('http://localhost:3000/users_sessions', reqObjSess)
          .then(resp => resp.json())
          .then(newUserSession => {
              console.log(newUserSession, 'datatatatat')
              this.props.createUserSession(newUserSession)
                //this.props.history.push('/myclasses')
          })
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

                    {/* <Form.Field>
                        <label>Users: </label>
                        <select name='user_id' value={this.state.user_id} onChange={this.handleChangeSession}>
                            {this.props.users.map((user) => {
                             return <option value={user.id}>{user.username}</option>;
                             })}
                        </select>
                    </Form.Field> */}

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
        users: state.users
    }
}

const mapDispatchToProps = {
    createCookingSession: createCookingSession,
    createUserSession: createUserSession
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm)
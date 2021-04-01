import React from 'react'
//import { Button, Form } from 'semantic-ui-react'
import { Button, Form, Grid, Header, Segment} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addCreated, createCookingSession, createUserSession, loadSessions, currentUser } from '../actions'

class ClassForm extends React.Component {
    state = {
        title: '',
        time: '',
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
        const newCookingSession = {...this.state, host_id: this.props.auth.id}

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

            //check controller and 

            // const reqObj = {
            //     method: 'PATCH',
            //     headers: {
            //       'Content-Type': 'application/json'
            //     },
            //     body:  JSON.stringify({created: newCookingSession.created})
            // }
            // fetch(`http://localhost:3000/cooking_sessions/${newCookingSession.id}`)
            // .then(resp => resp.json())
            // .then(data => {
            //   this.props.addCreated(data)
            // })  


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
                this.props.history.push('/profile')
              })

        } else {
            console.log('no')
        }
    }



    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
             <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 550 }}>
                <h1 className='cooking-class-form-h1' >Create a Virtual Cooking Class</h1>

                <Form onSubmit={this.handleSubmit} size='large'>
                    <Segment inverted stacked>
                    <Form.Input>
                      
                        <input name='title' type= 'text' value={this.state.title} onChange={this.handleChange} placeholder='title' />
                    </Form.Input>

                    <Form.Input>
                        
                        <input name='time' type= 'text' placeholder='date and time' value={this.state.time} onChange={this.handleChange} />
                    </Form.Input>

                    <Form.Input>
                        
                        <select name='recipe_id' value={this.state.recipe_id} onChange={this.handleChangeRecipe}>
                            {this.props.recipes.map((recipe) => {
                             return <option value={recipe.id}>{recipe.name}</option>;
                             })}
                        </select>
                    </Form.Input>

                    <Form.Input>
                     
                        <input name='meeting_link' type= 'url' value={this.state.meeting_link} onChange={this.handleChange} placeholder='meeting link' />
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
    currentUser: currentUser,
    addCreated: addCreated
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm)
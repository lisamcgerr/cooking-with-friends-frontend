import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/index'

class Login extends React.Component {
    state = {
        username: 'dexy_loves_eating',
        password: 'cooking2020',
        error: ''
    }

    handleInput = (e) => { 
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/login', reqObj)
        .then(resp => resp.json())
        .then(data => {
            console.log('data', data)
            if (data.error){
                this.setState({
                    error: data.error
                })
            } else {
                this.props.loginSuccess(data.user)
                localStorage.setItem('myAppToken', data.token)
                this.setState({
                    username: 'Julia',
                    password: 'abc',
                    error: ''})
                this.props.history.push('/profile')
            }
        })
    }

    render(){
        return(
            <div>
                 <br></br>
                <br></br>
                <br></br>
                {this.state.error? <h4 style={{color: 'red'}}> {this.state.error} </h4>: null}
                      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                        <Grid.Column style={{ maxWidth: 550 }}>
                        <Header as='h2' color='green' textAlign='center'>
                        Login To Your Account
                        </Header>
                        <Form onSubmit={this.handleSubmit} size='large'>
                            <Segment inverted stacked>
                            <Form.Input fluid icon='user' iconPosition='left' name={'username'} onChange={this.handleInput} value={this.state.username} placeholder='username' />
                            <Form.Input
                                fluid
                                icon='lock'
                                type='password'
                                iconPosition='left'
                                name={'password'} 
                                onChange={this.handleInput} 
                                value={this.state.password} 
                                placeholder='Password'
                            />

                            <Button color='green' fluid size='large'>
                                Login
                            </Button>
                            </Segment>
                        </Form>
                        {/* <Message>
                            New to us? <a href='http://localhost:3001/signup'>Sign Up</a>
                        </Message> */}
                        </Grid.Column>
                    </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginSuccess: loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
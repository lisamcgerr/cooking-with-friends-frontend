import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/index'

class Login extends React.Component {
    state = {
        username: 'Julia',
        password: 'abc',
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
        .then(user => {
            if (user.error){
                alert(user.error)
            } else {
                this.props.loginSuccess(user)
                this.setState({
                    username: 'Julia',
                    password: 'abc',
                    error: ''})
                this.props.history.push('/profile')
            }
        })
    }

    render(){
        console.log(this.props, '---')
        return(
            <div>
                <h3>Sign In</h3>
                    <form onSubmit={this.handleSubmit} >
                        <Form.Field>
                        <label>Username: </label>
                        <input name={'username'} onChange={this.handleInput} value={this.state.username} placeholder='username' />
                        </Form.Field>
                        <Form.Field>
                        <label>Password: </label>
                        <input name={'password'} onChange={this.handleInput} value={this.state.password} placeholder='Password' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </form>

            </div>
        )
    }
}

const mapDispatchToProps = {
    loginSuccess: loginSuccess
}

export default connect(null, mapDispatchToProps) (Login)
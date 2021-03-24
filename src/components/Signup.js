import React from 'react'
import { Button, Form } from 'semantic-ui-react'
//import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addUser } from '../actions/index'
//import uuid from 'uuid'


class Signup extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: '',
        bio: ''
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {...this.state}
        console.log(newUser)

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body:  JSON.stringify({user: newUser})
        }
        //debugger
        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(data => {
            //debugger
            console.log('data', data)
          this.props.addUser(data)
          this.props.history.push('/login')
        })
    }


    render(){
        return(
            <div>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>First Name: </label>
                        <input name='first_name' type= 'text' 
                        value={this.state.first_name} 
                        onChange={this.handleChange}  
                        placeholder='first name' />
                    </Form.Field>

                    <Form.Field>
                        <label>Last Name: </label>
                        <input name='last_name' type= 'text' 
                        value={this.state.last_name} 
                        onChange={this.handleChange}  
                        placeholder='last name' />
                     </Form.Field>

                    <Form.Field>
                        <label>Username: </label>
                        <input name='username' type= 'text' 
                        value={this.state.username} 
                        onChange={this.handleChange}  
                        placeholder='username' />
                    </Form.Field>

                    <Form.Field>
                        <label>Password: </label>
                        <input name='password' type= 'password' 
                        value={this.state.password} 
                        onChange={this.handleChange}  
                        placeholder='password' />
                    </Form.Field>

                    <Form.Field>
                        <label>Email: </label>
                        <input name='email' type= 'text' 
                        value={this.state.email} 
                        onChange={this.handleChange}  
                        placeholder='Email' />
                    </Form.Field>

                    <Form.Field>
                        <label>Bio: </label>
                        <input name='bio' type= 'text' 
                        value={this.state.bio} 
                        onChange={this.handleChange}  
                        placeholder='bio' />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                </form>

                    {/* <Form>
                        <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='First name: '
                            placeholder='First name'
                            value={this.state.first_name} 
                            onChange={this.handleChange}  
                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            label='Last name: '
                            placeholder='Last name'
                            value={this.state.last_name} 
                            onChange={this.handleChange}  
                        />
                        </Form.Group>
                        <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            label='Username: '
                            placeholder='username'
                            value={this.state.username} 
                            onChange={this.handleChange}  
                        />
                        <Form.Field
                            id='form-input-control-password'
                            control={Input}
                            type='password'
                            label='Password: '
                            placeholder='Password'
                            value={this.state.pasword} 
                            onChange={this.handleChange}  
                        />
                        </Form.Group>
                        <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        label='Email: '
                        placeholder='Email'
                        value={this.state.email} 
                        onChange={this.handleChange}
                        />

                        <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Bio: '
                        placeholder='Bio'
                        value={this.state.bio} 
                        onChange={this.handleChange}  
                        />

                        <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Submit'
                        />
                    </Form> */}

            </div>
        )
    }
}

const mapDispatchToProps = {
    addUser: addUser
}

function mapStateToProps(state){
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
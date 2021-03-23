import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addUser } from '../actions/index'
//import uuid from 'uuid'


class Signup extends React.Component {

    state = {
        first_name: 'sam',
        last_name: 'olanipekun',
        username: 'samooo',
        password: 'abc',
        //password_confirmation: '',
        email: 'sam@gmail.com',
        bio: 'bio'
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
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(newUser)
        }

        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(newUser => {
            console.log('data', newUser)
          this.props.addUser(newUser)
          this.props.history.push('/login')
        })
    }


    render(){
        return(
            <div>
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

                    {/* <Form.Field>
                        <label>Confirm Password: </label>
                        <input name='password_confirmation' type= 'password' value={this.state.password_confirmation} onChange={this.handleChange}  placeholder='confirm password' />
                    </Form.Field> */}

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
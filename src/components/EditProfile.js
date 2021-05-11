import React from 'react'
import { Button, Form, Segment, Grid } from 'semantic-ui-react'


class EditProfile extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: '',
        bio: '',
        image: '',
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
        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(data => {
          this.props.addUser(data)
          this.props.history.push('/login')
        })
    }


    render(){
        return(
            <div>
                <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                        <Grid.Column style={{ maxWidth: 550 }}>
                        <h1 className='signup-h1'>Sign Up</h1>
                        <Form onSubmit={this.handleSubmit} inverted size='large'>
                            <Segment inverted stacked>
                            <Form.Input fluid 
                                icon='user' 
                                iconPosition='left' 
                                name='first_name'   
                                type='text'            
                                value={this.state.first_name} 
                                onChange={this.handleChange}  
                                placeholder='first name'/>

                            <Form.Input fluid 
                                icon='user' 
                                iconPosition='left' 
                                name='last_name'   
                                type='text'            
                                value={this.state.last_name} 
                                onChange={this.handleChange}  
                                placeholder='last name'/>

                            <Form.Input fluid 
                                icon='user' 
                                iconPosition='left' 
                                name='username'   
                                type='text'            
                                value={this.state.username} 
                                onChange={this.handleChange}  
                                placeholder='username'/>    

                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='password'
                                type='password'
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />

                            <Form.Input fluid 
                                icon='mail' 
                                iconPosition='left' 
                                name='email'   
                                type='email'            
                                value={this.state.email} 
                                onChange={this.handleChange}  
                                placeholder='email'/>

                            <Form.Input fluid >
                                <textarea icon='user' 
                                iconPosition='left' 
                                name='bio'   
                                type='text'            
                                value={this.state.bio} 
                                onChange={this.handleChange}  
                                placeholder='...write your bio here' />
                            </Form.Input>    

                            <Form.Input fluid >
                                <textarea icon='image' 
                                iconPosition='left' 
                                name='image'   
                                type='text'            
                                value={this.state.image} 
                                onChange={this.handleChange}  
                                placeholder='image' />
                            </Form.Input>    
                    
                            <Button color='green' fluid size='large'>
                                Create account
                            </Button>
                            </Segment>
                        </Form>
                        </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default EditProfile
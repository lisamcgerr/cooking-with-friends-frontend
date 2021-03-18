import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class Signup extends React.Component {
    render(){
        return(
            <div>
                <form>
                    <Form.Field>
                        <label>First Name: </label>
                        <input placeholder='first name' />
                    </Form.Field>

                    <Form.Field>
                        <label>Last Name: </label>
                        <input placeholder='last name' />
                    </Form.Field>

                    <Form.Field>
                        <label>Username: </label>
                        <input placeholder='username' />
                    </Form.Field>

                    <Form.Field>
                        <label>Password: </label>
                        <input placeholder='password' />
                    </Form.Field>

                    <Form.Field>
                        <label>Email: </label>
                        <input placeholder='Email' />
                    </Form.Field>

                    <Form.Field>
                        <label>Bio: </label>
                        <input placeholder='bio' />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        )
    }
}

export default Signup
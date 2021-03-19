import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class ClassForm extends React.Component {
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
                        <input name='date' type= 'date' value={this.state.date} onChange={this.handleChange} />
                    </Form.Field>

                    <Form.Field>
                        <label>Meeting Link: </label>
                        <input name='meeting_link' type= 'url' value={this.state.meeting_link} onChange={this.handleChange} placeholder='meeting link' />
                    </Form.Field>

                    <Form.Field>
                        <label>Select a recipe: </label>
                        <input name='recipe_id' type= 'text' value={this.state.recipe_link} onChange={this.handleChange} placeholder='recipe link' />
                    </Form.Field>

                    <Form.Field>
                        <label>Image: </label>
                        <input name='image' type= 'text' value={this.state.image} onChange={this.handleChange} placeholder='image link' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </form>

            </div>
        )
    }
}

export default ClassForm
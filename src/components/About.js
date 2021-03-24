import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class About extends React.Component {


    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <Container text>
                <Header as='h2'>This is the About Page</Header>
                <p>
                Created by a Flatiron Student as my final project blah blah blah
                </p>
                <p>
                images 
                </p>
                <p>
                about 
                </p>
            </Container>
            </div>
        )
    }
}


export default About
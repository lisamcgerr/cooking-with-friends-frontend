import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class Home extends React.Component {
    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <Container text>
                <Header as='h2'>Welcome to the Cooking with Friends App</Header>
                <p>
                A community connecting people with food! Lets get cooking!
                </p>
                <p>
                image here ... stattistics about # of users and recipes
                </p>
            </Container>
            </div>
        )
    }
}

export default Home
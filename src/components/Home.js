import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'

class Home extends React.Component {
    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <Container text>
                    <Image />
                <Header as='h2'>Welcome to the Cooking with Friends App</Header>
                <p>
                The Cooking With Friends App was inspired by 
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
import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'

class About extends React.Component {


    render(){
        return(
            <div>
                <br></br>
                <Image className='cooking-image' src='https://user-images.githubusercontent.com/73184313/112770681-7cdfe080-8fed-11eb-95f9-bed43cb01f52.jpg' width='100%' />
                <Container text>
                <Header as='h2'>This is the About Page</Header>
                <p>
                Inspired by virtually distanced dinners - never eat alone
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
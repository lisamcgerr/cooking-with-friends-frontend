import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class CookingSessionsCard extends React.Component{

    render(){
        return(
            <div>
                <Card>
                    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
                    <Card.Content>
                    {/* <Card.Header> {this.props.cookingSession.title} </Card.Header> */}
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default CookingSessionsCard
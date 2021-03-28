import React from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'

class MyClassesCard extends React.Component {
    render(){
        return(
            <Card>
            <Card.Content>
              <Card.Header>{this.props.cookingSession.title}</Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.cookingSession.date}</span>
              </Card.Meta>
              <Card.Description>
                         
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {/* <a href={this.props.cookingSession.meeting_Link} target='blank'><strong>Click here to get your meeting started</strong></a> */}
              </a>
            </Card.Content>
          </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        recipes: state.recipes,
        cooking_sessions: state.cooking_sessions,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(MyClassesCard)


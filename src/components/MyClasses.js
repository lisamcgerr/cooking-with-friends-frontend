import React from 'react'
import { connect } from 'react-redux'
import { Card, Icon } from 'semantic-ui-react'

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
              <>
                <Icon name='user' />
                {/* {this.props.cookingSession.users.map(user => (
                <ul>
                <li>{user.username}</li>
                </ul>
              ))} */}
              </>
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


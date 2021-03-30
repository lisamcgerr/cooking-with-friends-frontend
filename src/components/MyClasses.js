import React from 'react'
import { connect } from 'react-redux'
import { Card, Grid } from 'semantic-ui-react'

class MyClassesCard extends React.Component {
    render(){
        return(
          <Grid.Row style={{ textAlign: 'center', width: '23%', padding: "10px" }}>
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
                {/* {this.props.cookingSession.users.map(user => (
                  <p><Icon name='user' />{user.username}</p>
              ))} */}
              </>
            </Card.Content>
          </Card>
          </Grid.Row>
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


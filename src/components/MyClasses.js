import React from 'react'
import { connect } from 'react-redux'
import { Card, Icon } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid'



class MyClassesCard extends React.Component {
    render(){
        return(
      
          <Grid item xs={3}>
            <Card>
            <Card.Content>
              <Card.Header textAlign='center' >{this.props.cookingSession.title}</Card.Header>
              <Card.Meta textAlign='center'>
                <span>{this.props.cookingSession.date}</span>
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
          </Grid>
  
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


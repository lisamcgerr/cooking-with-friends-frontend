import React from 'react'
import { connect } from 'react-redux'
import { joinAClass, currentUser } from '../actions/index'
import { Card, Icon, Button, Grid, Header } from 'semantic-ui-react'
//import UserCard from './UserCard'

class AllClasses extends React.Component {

  renderCookingSessionUsers = () => {
    const cs_users = this.props.cooking_sessions.map(cs => {
      return cs.users
    })
    console.log(cs_users)
    cs_users.map(user => (
      <>
      <Icon name='user' />
      {user.username}
    </>
    ))
  }

    renderAllClasses = () => {
        return this.props.cooking_sessions.map(csObj => (

            <Card>
            <Card.Content>
              <Card.Header>{csObj.title}</Card.Header>
              <Card.Meta>
                <span className='date'>{csObj.date.toLocaleString('en-us', 'long')}</span>
              </Card.Meta>
              <Card.Description>
        
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {csObj.users.map(user => (
                <p><Icon name='user' />{user.username}</p>
              ))}

          {/* {this.props.users.filter(user => (user.id === parseInt(csObj.host_id) <p>{user.username}</p>))} */}

            <Button color='green' id={csObj.id} onClick={this.handleClick}>Join Cooking Class</Button>
            </Card.Content>
           
          </Card>

        ))
    }

    handleClick = (e) => {
        const new_user_id = this.props.auth.id
        const newUserSession = {user_id: new_user_id, cooking_session_id: parseInt(e.target.id)}
        console.log('new user session', newUserSession)
        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(newUserSession)
        }
       
        fetch('http://localhost:3000/user_sessions', reqObj)
        .then(resp => resp.json())
        .then(newUserSession => {
            if (newUserSession.message){
              alert(newUserSession.message)
            } else { 
                this.props.joinAClass(newUserSession)
                this.props.history.push('/profile')}
        })

    }

    render(){
        return(
            <div>
              <br></br>
               <Header as='h1' color='green' textAlign='center'>
                            All Cooking Classes
                </Header>
                {this.renderAllClasses()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        recipes: state.recipes,
        cooking_sessions: state.cooking_sessions,
        auth: state.auth,
        users: state.users
    }
}

const mapDispatchToProps = {
    joinAClass: joinAClass,
    currentUser: currentUser
}


export default connect(mapStateToProps, mapDispatchToProps)(AllClasses)
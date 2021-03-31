import React from 'react'
import { connect } from 'react-redux'
import { deleteCookingSession, loadCookingSessions, createUserSession, joinAClass, currentUser, createCookingSession, createUserCookingSession } from '../actions/index'
import { Card, Icon, Button, Header } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

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

  handleDelete = (e) => {
    const id = parseInt(e.target.id)
    fetch(`http://localhost:3000/cooking_sessions/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(cookingSession => {
      alert(cookingSession.message)
        this.props.deleteCookingSession(id)
    })
  }

  renderHost = (user_id) => {
    if (user_id === 1 ) {
        return 'ironman'
    } else if (user_id === 2) {
        return 'thor'
    } else if (user_id === 3) {
        return 'lisa_loves_cooking'
    } else if (user_id === 4) {
        return 'dexy_loves_eating'
    } else {
        return 'scarlet_witch'
    }
}

    renderAllClasses = () => {
        return this.props.cooking_sessions.map(csObj => (
          <Grid textAlign='center' item xs={3}>
            <Card>
            <Card.Content>
              <Card.Header textAlign='center' >{csObj.title}</Card.Header>
              <Card.Meta textAlign='center' >
                <span textAlign='center' className='date'>{csObj.date}</span>
                <p textAlign='center' ><Icon name='user' /> Host: {this.renderHost(csObj.host_id)}</p>
              </Card.Meta>
              <Card.Description textAlign='center' >
            {csObj.host_id === this.props.auth.id ? <Button color='grey' id={csObj.id} onClick={this.handleDelete}>Delete</Button> : null}
              </Card.Description>
            </Card.Content>
            <Card.Content extra  textAlign='center' >
              <strong> Users in Cooking Class </strong>
              <br></br>
              <br></br>
              {csObj.users.map(user => (
                <p><Icon name='user' />{user.username}</p>
              ))}

          {/* {this.props.users.filter(user => (user.id === parseInt(csObj.host_id) <p>{user.username}</p>))} */}

            <Button color='teal' id={csObj.id} onClick={this.handleClick}>Join Cooking Class</Button>
            </Card.Content>
           
          </Card>
        </Grid>
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
                this.props.createUserSession(newUserSession)
                //console.log('newUserSession', newUserSession.cooking_session_id)
                const csID = parseInt(newUserSession.cooking_session_id)
                fetch(`http://localhost:3000/cooking_sessions/${csID}`)
                .then(resp => resp.json())
                .then(cooking_session => {
                  console.log(cooking_session, 'cooking sesssion data')
                  this.props.createUserCookingSession(cooking_session)
                  this.props.history.push('/profile')
                })
              }
        })
      
    }

    componentDidUpdate(prevState, _){
      if (this.props.user_cooking_sessions.length !== prevState.user_cooking_sessions.length ){

      fetch('http://localhost:3000/cooking_sessions')
      .then(resp => resp.json())
      .then(cooking_sessions => {
        this.props.loadCookingSessions(cooking_sessions)
      })
    } else {
        console.log('no')
    }
    }

    render(){

        return(
            <div flexGrow={1}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                <Header as='h1' color='grey' textAlign='center'>
                    <br></br>
                   All Cooking Classes
                   <br></br>
                  </Header>
                </Grid>
                <Divider />
                  {this.renderAllClasses()}
              </Grid>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        recipes: state.recipes,
        cooking_sessions: state.cooking_sessions,
        auth: state.auth,
        users: state.users,
        user_cooking_sessions: state.user_cooking_sessions
    }
}

const mapDispatchToProps = {
    joinAClass: joinAClass,
    loadCookingSessions: loadCookingSessions,
    createUserSession: createUserSession,
    createCookingSession: createCookingSession,
    currentUser: currentUser,
    createUserCookingSession: createUserCookingSession,
    deleteCookingSession: deleteCookingSession
}


export default connect(mapStateToProps, mapDispatchToProps)(AllClasses)
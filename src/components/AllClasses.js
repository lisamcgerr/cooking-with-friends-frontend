import React from 'react'
import { connect } from 'react-redux'
import { deleteCookingSession, loadCookingSessions, createUserSession, joinAClass, currentUser, createCookingSession, createUserCookingSession } from '../actions/index'
import { Card, Icon, Button, Header, Image } from 'semantic-ui-react'
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
    } else if (user_id === 5) {
        return 'scarlet_witch'
    } else if (user_id === 6) {
        return 'beethoven_stbernard'
    } else if (user_id === 7 ) {
        return 'superman'
    } else if (user_id === 8 ) {
        return 'batman'
    } else if (user_id === 9 ) {
        return 'wonder_woman'
    } else if (user_id === 10 ) {
        return 'aquaman'
    } else if (user_id === 11 ) {
        return 'cyborg'
    } else if (user_id === 12 ) {
        return 'captain_america'
    } else if (user_id === 13 ) {
        return 'the_hulk'
    } else if (user_id === 14 ) {
        return 'black_widow'
    } else if (user_id === 15 ) {
        return 'hawkeye'
    } else {
      return 'the_flash'
    }
}

renderImage = (recipe_id) => {
  if (recipe_id === 1 ) {
      return 'https://user-images.githubusercontent.com/73184313/111329949-85273b80-863d-11eb-9a13-6670fe46c4c4.jpeg'
  } else if (recipe_id === 2) {
      return 'https://user-images.githubusercontent.com/73184313/111330467-f535c180-863d-11eb-9e85-2416127c5700.jpeg'
  } else if (recipe_id === 3) {
      return 'https://user-images.githubusercontent.com/73184313/111330721-33cb7c00-863e-11eb-813b-3fa1dd9af825.jpeg'
  } else if (recipe_id === 4) {
      return 'https://user-images.githubusercontent.com/73184313/111331139-9e7cb780-863e-11eb-81a7-1cdca92bebc1.jpeg'
  } else if (recipe_id === 5) {
      return 'https://user-images.githubusercontent.com/73184313/111373995-963a7180-866a-11eb-9ad9-c8376c96e525.jpeg'
  } else if (recipe_id === 6) {
      return 'https://user-images.githubusercontent.com/73184313/111374118-bbc77b00-866a-11eb-9610-171d0ffb5bd3.jpeg'
  } else if (recipe_id === 7 ) {
      return 'https://user-images.githubusercontent.com/73184313/111374239-dbf73a00-866a-11eb-9620-fb0caa93284d.jpeg'
  } else if (recipe_id === 8 ) {
      return 'https://user-images.githubusercontent.com/73184313/111374440-1c56b800-866b-11eb-9478-077249f97090.jpeg'
  } else if (recipe_id === 9 ) {
      return 'https://user-images.githubusercontent.com/73184313/111374597-4c05c000-866b-11eb-965e-e61ac7aaa258.jpeg'
  } else if (recipe_id === 10 ) {
      return 'https://user-images.githubusercontent.com/73184313/111374764-79526e00-866b-11eb-8ffe-dc5f18a37726.jpeg'
  } else if (recipe_id === 11 ) {
      return 'https://user-images.githubusercontent.com/73184313/112767956-1eac0100-8fdf-11eb-8d1e-e7320ececa87.jpeg'
  } else if (recipe_id === 12 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768174-4d76a700-8fe0-11eb-8a71-3621f3c1619b.jpeg'
  } else if (recipe_id === 13 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768183-5c5d5980-8fe0-11eb-8859-ff57dd750aad.jpeg'
  } else if (recipe_id === 14 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768227-9b8baa80-8fe0-11eb-92e2-127fc1fce23b.jpeg'
  } else if (recipe_id === 15 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768261-d68dde00-8fe0-11eb-8d8e-aa5ea601fd85.jpeg'
  } else if (recipe_id === 16 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768330-3dab9280-8fe1-11eb-8d89-e38c3cf6c201.jpeg'
  } else if (recipe_id === 17 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768411-a7c43780-8fe1-11eb-8753-ef11742bce12.jpeg'
  } else if (recipe_id === 18 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768447-c75b6000-8fe1-11eb-8c10-e91fa5788d63.jpeg'
  } else if (recipe_id === 19 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768514-f8d42b80-8fe1-11eb-93fa-acf471aaaaaf.jpeg'
  } else if (recipe_id === 20 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768548-21f4bc00-8fe2-11eb-844f-b843a4139c97.jpeg'
  } else if (recipe_id === 21 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768592-54061e00-8fe2-11eb-88e0-296a90411dab.jpeg'
  } else if (recipe_id === 22 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768631-7dbf4500-8fe2-11eb-85b4-2cf19f144484.jpeg'
  } else if (recipe_id === 23 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768667-a9dac600-8fe2-11eb-9db6-cc77f6fd87e8.jpeg'
  } else if (recipe_id === 24 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768694-d42c8380-8fe2-11eb-8b63-cc94dd91f738.jpeg'
  } else if (recipe_id === 25 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768729-076f1280-8fe3-11eb-872d-a19d165c007f.jpeg'
  } else if (recipe_id === 26 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768756-32f1fd00-8fe3-11eb-920f-d47703d520e4.jpeg'
  } else if (recipe_id === 27 ) {
      return 'https://user-images.githubusercontent.com/73184313/112768796-603eab00-8fe3-11eb-9bb3-bbf1765afb44.jpeg'
  } else {
      return 'https://user-images.githubusercontent.com/73184313/112768847-92500d00-8fe3-11eb-8cd3-818dd2fba0bb.jpeg'
  }
}




    renderAllClasses = () => {
        return this.props.cooking_sessions.map(csObj => (
          <Grid textAlign='center' item xs={3}>
            <Card>
            <Image wrapped ui={false} src={this.renderImage(csObj.recipe_id)} /> 
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
            <div className='all-classes-container' flexGrow={1}>
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
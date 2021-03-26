import React from 'react'
import { connect } from 'react-redux'
import { joinAClass } from '../actions/index'
import { Card, Icon, Image } from 'semantic-ui-react'



class AllClasses extends React.Component {

  renderCookingSessionUsers = () => {
    const cs_users = this.props.cooking_sessions.map(cs => {
      return cs.users
    })
    console.log(cs_users)
    cs_users.map(user => (
      <a>
      <Icon name='user' />
      {user.username}
    </a>
    ))
  }

    renderAllClasses = () => {
        return this.props.cooking_sessions.map(csObj => (
            <Card>
            <Card.Content>
              <Card.Header>{csObj.title}</Card.Header>
              <Card.Meta>
                <span className='date'>{csObj.date}</span>
              </Card.Meta>
              <Card.Description>
        
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            {this.renderCookingSessionUsers()}
            </Card.Content>
            <button id={csObj.id} onClick={this.handleClick}>Join Cooking Session</button>
          </Card>
        ))

    }

    handleClick = (e) => {
        //console.log(e.target.id)
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
        //debugger
        fetch('http://localhost:3000/user_sessions', reqObj)
        .then(resp => resp.json())
        .then(newUserSession => {
            console.log('user_session', newUserSession)
          this.props.joinAClass(newUserSession)
          this.props.history.push('/myclasses')
        })

    }


    render(){
        return(
            <div>
                <h1>All Cooking Classes</h1>
                {this.renderAllClasses()}
            </div>
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

const mapDispatchToProps = {
    joinAClass: joinAClass
}


export default connect(mapStateToProps, mapDispatchToProps)(AllClasses)
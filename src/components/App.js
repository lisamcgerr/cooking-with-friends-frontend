import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
import EditProfile from './EditProfile'
import RecipeContainer from './RecipeContainer'
import CreateComment from './CreateComment'
import MyClassesContainer from './MyClassesContainer'
import RecipeForm from './RecipeForm'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ClassForm from './ClassForm'
import { Image } from 'semantic-ui-react'
import AllClasses from './AllClasses'
import {  currentUser, 
          loadCookingSessions, 
          loadRecipes, 
          loadComments, 
          loadSessions, 
          loadUsers } from '../actions/index'


class App extends React.Component {

  componentDidMount(){

    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(data =>
      this.props.loadUsers(data))

    const token = localStorage.getItem('myAppToken')
    
    if (!token){
        this.props.history.push('/login')
    } else {

      const reqObj = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }      
      fetch('http://localhost:3000/profile', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if(data.error){
          this.props.history.push('/login')
        } else { 
          this.props.currentUser(data)
        }
      })
    }

    fetch('http://localhost:3000/cooking_sessions')
    .then(resp => resp.json())
    .then(cooking_sessions => {
      this.props.loadCookingSessions(cooking_sessions)
    })

    // fetch('http://localhost:3000/recipes')
    // .then(resp => resp.json())
    // .then(recipes => {
    //   this.props.loadRecipes(recipes)
    // })

    // fetch('http://localhost:3000/user_sessions')
    // .then(resp => resp.json())
    // .then(user_sessions => {
    //   this.props.loadSessions(user_sessions)
    // })

    // fetch('http://localhost:3000/comments')
    // .then(resp => resp.json())
    // .then(comments => {
    //   this.props.loadComments(comments)
    // })
}

componentDidUpdate(prevState, _){
  if (this.props.auth){
    fetch('http://localhost:3000/recipes')
    .then(resp => resp.json())
    .then(recipes => {
      this.props.loadRecipes(recipes)
    })

    fetch('http://localhost:3000/user_sessions')
    .then(resp => resp.json())
    .then(user_sessions => {
      this.props.loadSessions(user_sessions)
    })

    fetch('http://localhost:3000/comments')
    .then(resp => resp.json())
    .then(comments => {
      this.props.loadComments(comments)
    })
  } else {
    console.log('no')
  }
}
   

  render(){
    
    return(
      <div>
        <Navbar />
        <Image className='cooking-image' src='https://user-images.githubusercontent.com/73184313/119044737-34ef9100-b980-11eb-8a2c-c8eeead1680e.png' width='100%' paddingTop='0' />

          <Switch>
            <Route exact path='/createaclass' component={ClassForm} />
            <Route exact path='/recipes' component={RecipeContainer} />
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/profile' component={MyClassesContainer}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/recipes/new' component={RecipeForm}/>
            <Route exact path='/allclasses' component={AllClasses}/>
            <Route exact path='/editprofile' component={EditProfile}/>
            <Route exact path='/createcomment' component={CreateComment}/>
          </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = {
  currentUser: currentUser,
  loadUsers: loadUsers,
  loadRecipes: loadRecipes,
  loadCookingSessions: loadCookingSessions,
  loadSessions: loadSessions,
  loadComments: loadComments
}

function mapStateToProps(state){
  return {
      auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

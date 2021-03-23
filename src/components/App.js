import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import RecipeContainer from './RecipeContainer'
import MyClassesContainer from './MyClassesContainer'
import RecipeForm from './RecipeForm'
import 'semantic-ui-css/semantic.min.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser, loadUsers } from '../actions/index'
import ClassForm from './ClassForm';




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
}
   

  render(){
    
    return(
      <div>
        <Navbar />
        
        {/* <RecipeContainer recipes={this.state.recipes}/> */}
          <Switch>
            <Route exact path='/createaclass' component={ClassForm} />
            <Route exact path='/recipes' component={RecipeContainer} />
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/profile' component={Dashboard}/>
            <Route exact path='/myclasses' component={MyClassesContainer}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/recipes/new' component={RecipeForm}/>
          </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = {
  currentUser: currentUser,
  loadUsers: loadUsers
}

export default connect(null, mapDispatchToProps)(withRouter(App))

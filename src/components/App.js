import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
import Dashboard from './Dashboard'

class App extends React.Component {
  render(){
    return(
      <div>
        <Navbar />
          <Switch>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/profile' component={Dashboard}/>
            <Route path='*'>
                    <h1>404 not found</h1>
            </Route>
          </Switch>
      </div>
    )
  }
}

export default App

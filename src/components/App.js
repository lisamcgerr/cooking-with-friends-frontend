import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import RecipeContainer from './RecipeContainer'
import MyClasses from './MyClasses'
import RecipeForm from './RecipeForm'
import 'semantic-ui-css/semantic.min.css'


class App extends React.Component {


   

  render(){
    
    return(
      <div>
        <Navbar />
        
        {/* <RecipeContainer recipes={this.state.recipes}/> */}
          <Switch>
            <Route exact path="/recipes" component={RecipeContainer} />
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/profile' component={Dashboard}/>
            <Route exact path='/myclasses' component={MyClasses}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/recipes/new' component={RecipeForm}/>
          </Switch>
      </div>
    )
  }
}

export default App

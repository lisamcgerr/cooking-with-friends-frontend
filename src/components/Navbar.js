import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {logout} from '../actions/index'

class Navbar extends React.Component {

    handleLogOut = () => {
        localStorage.clear()
        this.props.logout()
    }

    render(){
        return(
          
                <Menu secondary >
                   
                    <Link to="/">
                        <Menu.Item
                        
                        name='Home'/>
                    </Link>

                    <Link to="/recipes">
                        <Menu.Item
                        name='Recipes'/>
                    </Link>

                    <Link to="/recipes/new">
                        <Menu.Item
                        name='Create A New Recipe'/>
                    </Link>

                    {/* <Link to="/myclasses">
                        <Menu.Item
                        name='My Cooking Classes'/>
                    </Link> */}

                    <Link to="/allclasses">
                        <Menu.Item
                        name='All Cooking Classes'/>
                    </Link>

                    <Link to="/createaclass">
                        <Menu.Item
                        name='Create a Cooking Class'/>
                    </Link>

                    <Link to="/profile">
                        <Menu.Item
                        name='Profile'/>
                    </Link>

                    <Menu.Menu position='right'>
                    <Link to="/login">
                       <Menu.Item 
                        name={this.props.auth ? 'Logout': 'Login'} onClick={this.handleLogOut}/>
                    </Link>

                    <Link to="/signup">
                        <Menu.Item 
                        name='Sign Up'/>
                    </Link>
                    </Menu.Menu>
                    
                </Menu>
           
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
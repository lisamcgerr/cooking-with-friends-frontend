import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import AllClasses from './AllClasses'





class Navbar extends React.Component {

    render(){
        return(
            <div>
                <Menu>
                    <Link to="/">
                        <Menu.Item
                        name='Home'/>
                    </Link>

                    <Link to="/about">
                        <Menu.Item
                        name='About'/>
                    </Link>

                    <Link to="/recipes">
                        <Menu.Item
                        name='Recipes'/>
                    </Link>

                    <Link to="/recipes/new">
                        <Menu.Item
                        name='Create A New Recipe'/>
                    </Link>

                    <Link to="/myclasses">
                        <Menu.Item
                        name='My Cooking Classes'/>
                    </Link>

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

                    <Link to="/login">
                        <Menu.Item
                        name='Login'/>
                    </Link>

                    <Link to="/signup">
                        <Menu.Item
                        name='Sign Up'/>
                    </Link>
                    
                </Menu>
            </div>
        )
    }
}

export default Navbar
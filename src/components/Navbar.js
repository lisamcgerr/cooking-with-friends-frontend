import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'




class Navbar extends React.Component {

    render(){
        return(
            <div>
                <Menu>
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

                    <Link to="/myclasses">
                        <Menu.Item
                        name='MyClasses'/>
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
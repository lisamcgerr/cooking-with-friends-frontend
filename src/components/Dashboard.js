import React from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Dashboard extends React.Component {


    render(){
        return(
            <div>
                <h1>{this.props.auth.username}'s Home Page</h1>
                <Image src={this.props.auth.image} size='small' />
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        //recipes: state.recipes,
        auth: state.auth
        //users: state.users
    }
}



export default connect(mapStateToProps, null)(Dashboard)
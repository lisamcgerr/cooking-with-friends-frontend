import React from 'react'
import {connect} from 'react-redux'

class Dashboard extends React.Component {
    componentDidMount(){
        if (!this.props.auth){
            this.props.history.push('/login')
        }
    }

    render(){
        return(
            <div>
                <h1>This is the Dashboard page</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Dashboard)
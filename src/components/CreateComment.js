import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/index'

class CreateComment extends React.Component {

    state = {
        post: '',
        user_id: '',
        recipe_id: ''
    }

    // handleInput = (e) => {
    //     this.setState({
    //         [e.target.post]: e.target.value,
    //         user_id: this.props.auth.id,
    //         recipe_id: 
    //     })
    // }

    render(){
        return(
            <div>

            </div>
        )
    }
}

const mapDispatchToProps = {
    createComment: createComment
}

export default connect(null, mapDispatchToProps)(CreateComment)
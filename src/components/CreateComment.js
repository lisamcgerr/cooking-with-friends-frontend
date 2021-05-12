import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/index'

class CreateComment extends React.Component {
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
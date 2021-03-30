import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'


class RecipeCommentCard extends React.Component {

    renderUser = (user_id) => {
        if (user_id === 1 ) {
            return 'ironman'
        } else if (user_id === 2) {
            return 'thor'
        } else if (user_id === 3) {
            return 'lisa_loves_cooking'
        } else if (user_id === 4) {
            return 'dexy_loves_eating'
        } else {
            return 'scarlet_witch'
        }
    }


    render(){
        return(
            <div>
                  <Comment.Group minimal>
                        <Comment>
                        {/* <Comment.Avatar as='a' src="https://user-images.githubusercontent.com/73184313/112050087-726da480-8b1e-11eb-884e-ec03154a1980.png"/> */}
                        <Comment.Content>
                            <Comment.Author as='a'><Icon name='user'/>{this.renderUser(this.props.comment.user_id)}</Comment.Author><br></br>
                            <Comment.Metadata>
                            <span>{this.props.comment.created}</span>
                            </Comment.Metadata>
                            <Comment.Text>{this.props.comment.post}</Comment.Text>
                        </Comment.Content>
                        </Comment>
                    </Comment.Group>
                    <br></br>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.users,
        comments: state.comments
    }
}



export default connect(mapStateToProps, null)(RecipeCommentCard)
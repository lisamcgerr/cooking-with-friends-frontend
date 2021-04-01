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
        } else if (user_id === 5) {
            return 'scarlet_witch'
        } else if (user_id === 6) {
            return 'beethoven_stbernard'
        } else if (user_id === 7 ) {
            return 'superman'
        } else if (user_id === 8 ) {
            return 'batman'
        } else if (user_id === 9 ) {
            return 'wonder_woman'
        } else if (user_id === 10 ) {
            return 'aquaman'
        } else if (user_id === 11 ) {
            return 'cyborg'
        } else if (user_id === 12 ) {
            return 'captain_america'
        } else if (user_id === 13 ) {
            return 'the_hulk'
        } else if (user_id === 14 ) {
            return 'black_widow'
        } else if (user_id === 15 ) {
            return 'hawkeye'
        } else {
          return 'the_flash'
        }
    }


    render(){
        return(
            <div className='comments'>
                  <Comment.Group minimal textAlign='center'>
                        <Comment textAlign='center'>
                        <Comment.Content textAlign='center'>
                            <Comment.Author textAlign='center' as='a'><Icon name='user'/>  {this.renderUser(this.props.comment.user_id)}</Comment.Author><br></br>
                            <Comment.Metadata textAlign='center'>
                            <span>{this.props.comment.created}</span>
                            </Comment.Metadata>
                            <Comment.Text>  {this.props.comment.post}</Comment.Text>
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
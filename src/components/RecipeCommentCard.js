import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'


class RecipeCommentCard extends React.Component {



    render(){
        return(
            <div>
                  <Comment.Group minimal>
                        <Comment>
                        <Comment.Avatar as='a' src="https://user-images.githubusercontent.com/73184313/112050087-726da480-8b1e-11eb-884e-ec03154a1980.png"/>
                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                            <span>{this.props.comment.created_at}</span>
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
import React from 'react'
import { Comment } from 'semantic-ui-react'

class UserCard extends React.Component {
    render(){
        return(
            <div>
                  <Comment.Group minimal>
                        <Comment>
                        <Comment.Avatar as='a' src="https://user-images.githubusercontent.com/73184313/112050087-726da480-8b1e-11eb-884e-ec03154a1980.png"/>
                        <Comment.Content>
                            <Comment.Author as='a'>{this.props.user.first_name}</Comment.Author>
                            <Comment.Metadata>
                            <span>{this.props.user.username}</span>
                            </Comment.Metadata>
                            <Comment.Text> </Comment.Text>
                        </Comment.Content>
                        </Comment>
                    </Comment.Group>
                    <br></br>
            </div>
        )
    }
}


export default UserCard
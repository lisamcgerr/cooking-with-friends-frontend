import React from 'react'
import { connect } from 'react-redux'
import MyClassesCard from './MyClasses'
import { Grid, Header, Card, Image} from 'semantic-ui-react'


class MyClassesContainer extends React.Component {

    renderMyClasses = () => {
        return this.props.user_cooking_sessions.map(cookingSessionObj => (
            <MyClassesCard
                key={cookingSessionObj.id}
                cookingSession={cookingSessionObj}
            />
        ))
    }


    render(){
        return(
        <>  
        <Grid paddingTop='50px' paddingLeft='50px' as='h1' color='green' textAlign='center'>
                {this.props.auth.first_name} {this.props.auth.last_name}'s Dashboard
        </Grid>   
        <Grid marginLeft= '275px' paddingTop='50px'as='h2' color='green' >
        <Image circular textAlign='center' src={this.props.auth.image} size='large' /> 
        <br></br>
                username: {this.props.auth.username}
        </Grid>     
        <Header marginLeft= '275px' paddingTop='50px'as='h3' color='green' >
                bio: {this.props.auth.bio}
        </Header>  
            <div class="ui center aligned middle aligned grid" >
            <Grid divided='vertically' textAlign='center'>
              <Grid.Row columns={1} >
                 <Header as='h1' color='green' textAlign='center'>
                   <br></br>
                  Upcoming Cooking Classes
                 </Header>
               
                   <Grid.Column style={{ marginLeft: '275px', height: '100vh', paddingTop: '50px' }}>
                     <Card.Group itemsPerRow={1} >
                   {this.renderMyClasses()}
                   </Card.Group>
                   </Grid.Column>
                   </Grid.Row>
               </Grid>
         </div>
         </>
        )
    }
}

function mapStateToProps(state){
    return {
        user_cooking_sessions: state.user_cooking_sessions,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(MyClassesContainer)
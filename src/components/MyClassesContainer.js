import React from 'react'
import { connect } from 'react-redux'
import MyClassesCard from './MyClasses'
import { Header, Image, Card} from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import '../App.css'



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
        <div flexGrow={1} >   
            <Grid container spacing={3} textAlign='center'>
                <Grid item xs={12}>
                    <Header as='h1' color='grey' textAlign='center' paddingBottom='50px'>
                        <br></br>
                        {this.props.auth.first_name} {this.props.auth.last_name}'s Dashboard
                        <br></br>
                        <br></br>
                        <br></br>
                    </Header>
                </Grid>
                    <Divider />
                
                <Grid className='profile-page 'item xs={3} >
                    <Card className='card' >
                        <Image wrapped ui={false} src={this.props.auth.image} /> 
                        <Card.Content>
                            <Card.Header>{this.props.auth.username}</Card.Header>
                                <Card.Meta>
                                <span className='date'>Joined in 2021</span>
                                </Card.Meta>
                                    <Card.Description>
                                        {this.props.auth.bio}
                                    </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid>

                <Grid container xs={9} spacing={3} textAlign='center'>
                   {this.renderMyClasses()}
                </Grid>
            </Grid>
        </div>
    
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
import React from 'react'
import { connect } from 'react-redux'
import MyClassesCard from './MyClasses'
import { Segment, Statistic, Image, Card, Button } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid'
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

    handleEdit = (e) => {
        e.preventDefault()
        this.props.history.push('/editprofile')
    }


    render(){
        return(
            <>
        <h1 className='dashboard-h1'> {this.props.auth.first_name} {this.props.auth.last_name}'s Home Page</h1><br></br>
        <div flexGrow={1} >   
            <Grid container spacing={3} textAlign='center'>
                <Grid className='profile-page 'item xs={3} >
                    <Card fluid className='card' >
                        <Image className='profile-image' wrapped ui={false} src={this.props.auth.image} /> 
                        <Card.Content>
                            <Card.Header textAlign='center' >{this.props.auth.username}</Card.Header>
                                <Card.Meta textAlign='center' >
                                <span >{this.props.auth.email}</span>
                                </Card.Meta>
                                    <Card.Description textAlign='center' >
                                        {this.props.auth.bio}
                                    </Card.Description>
                        </Card.Content>
                        <Button onClick={this.handleEdit}color='grey'>Edit Profile</Button>
                    </Card>
                </Grid>
                
                <Grid className='my-classes-containery' container xs={9} spacing={3} textAlign='center'>
                    
                   
                   {this.renderMyClasses()}
                </Grid>
            </Grid>
        </div>
        </>
    
        )
    }
}

function mapStateToProps(state){
    return {
        user_cooking_sessions: state.user_cooking_sessions,
        cooking_sessions: state.cooking_sessions,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(MyClassesContainer)
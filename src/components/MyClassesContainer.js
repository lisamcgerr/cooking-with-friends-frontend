import React from 'react'
import { connect } from 'react-redux'
import MyClassesCard from './MyClasses'
import { Header, Image} from 'semantic-ui-react'
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
                
                <Grid className='profile-page 'item xs={4} >
                    <Image circular textAlign='center' src={this.props.auth.image} size='medium' className='profile-pic' /> 
                    <br></br>
                    <br></br>
                    <h2 className='profile-page'>{this.props.auth.username} </h2>
                    <h3 className='profile-page'>{this.props.auth.bio}</h3>
                </Grid>

                <Grid container xs={8} spacing={3} textAlign='center'>
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
import React from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid'



class MyClassesCard extends React.Component {

  renderImage = (recipe_id) => {
    if (recipe_id === 1 ) {
        return 'https://user-images.githubusercontent.com/73184313/111329949-85273b80-863d-11eb-9a13-6670fe46c4c4.jpeg'
    } else if (recipe_id === 2) {
        return 'https://user-images.githubusercontent.com/73184313/111330467-f535c180-863d-11eb-9e85-2416127c5700.jpeg'
    } else if (recipe_id === 3) {
        return 'https://user-images.githubusercontent.com/73184313/111330721-33cb7c00-863e-11eb-813b-3fa1dd9af825.jpeg'
    } else if (recipe_id === 4) {
        return 'https://user-images.githubusercontent.com/73184313/111331139-9e7cb780-863e-11eb-81a7-1cdca92bebc1.jpeg'
    } else if (recipe_id === 5) {
        return 'https://user-images.githubusercontent.com/73184313/111373995-963a7180-866a-11eb-9ad9-c8376c96e525.jpeg'
    } else if (recipe_id === 6) {
        return 'https://user-images.githubusercontent.com/73184313/111374118-bbc77b00-866a-11eb-9610-171d0ffb5bd3.jpeg'
    } else if (recipe_id === 7 ) {
        return 'https://user-images.githubusercontent.com/73184313/111374239-dbf73a00-866a-11eb-9620-fb0caa93284d.jpeg'
    } else if (recipe_id === 8 ) {
        return 'https://user-images.githubusercontent.com/73184313/111374440-1c56b800-866b-11eb-9478-077249f97090.jpeg'
    } else if (recipe_id === 9 ) {
        return 'https://user-images.githubusercontent.com/73184313/111374597-4c05c000-866b-11eb-965e-e61ac7aaa258.jpeg'
    } else if (recipe_id === 10 ) {
        return 'https://user-images.githubusercontent.com/73184313/111374764-79526e00-866b-11eb-8ffe-dc5f18a37726.jpeg'
    } else if (recipe_id === 11 ) {
        return 'https://user-images.githubusercontent.com/73184313/112767956-1eac0100-8fdf-11eb-8d1e-e7320ececa87.jpeg'
    } else if (recipe_id === 12 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768174-4d76a700-8fe0-11eb-8a71-3621f3c1619b.jpeg'
    } else if (recipe_id === 13 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768183-5c5d5980-8fe0-11eb-8859-ff57dd750aad.jpeg'
    } else if (recipe_id === 14 ) {
        return 'black_widowhttps://user-images.githubusercontent.com/73184313/112768227-9b8baa80-8fe0-11eb-92e2-127fc1fce23b.jpeg'
    } else if (recipe_id === 15 ) {
        return 'hawkeyehttps://user-images.githubusercontent.com/73184313/112768261-d68dde00-8fe0-11eb-8d8e-aa5ea601fd85.jpeg'
    } else if (recipe_id === 16 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768330-3dab9280-8fe1-11eb-8d89-e38c3cf6c201.jpeg'
    } else if (recipe_id === 17 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768411-a7c43780-8fe1-11eb-8753-ef11742bce12.jpeg'
    } else if (recipe_id === 18 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768447-c75b6000-8fe1-11eb-8c10-e91fa5788d63.jpeg'
    } else if (recipe_id === 19 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768514-f8d42b80-8fe1-11eb-93fa-acf471aaaaaf.jpeg'
    } else if (recipe_id === 20 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768548-21f4bc00-8fe2-11eb-844f-b843a4139c97.jpeg'
    } else if (recipe_id === 21 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768592-54061e00-8fe2-11eb-88e0-296a90411dab.jpeg'
    } else if (recipe_id === 22 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768631-7dbf4500-8fe2-11eb-85b4-2cf19f144484.jpeg'
    } else if (recipe_id === 23 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768667-a9dac600-8fe2-11eb-9db6-cc77f6fd87e8.jpeg'
    } else if (recipe_id === 24 ) {
          return 'https://user-images.githubusercontent.com/73184313/112768694-d42c8380-8fe2-11eb-8b63-cc94dd91f738.jpeg'
    } else if (recipe_id === 25 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768729-076f1280-8fe3-11eb-872d-a19d165c007f.jpeg'
    } else if (recipe_id === 26 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768756-32f1fd00-8fe3-11eb-920f-d47703d520e4.jpeg'
    } else if (recipe_id === 27 ) {
        return 'https://user-images.githubusercontent.com/73184313/112768796-603eab00-8fe3-11eb-9bb3-bbf1765afb44.jpeg'
    } else {
        return 'https://user-images.githubusercontent.com/73184313/112768847-92500d00-8fe3-11eb-8cd3-818dd2fba0bb.jpeg'
    }
}



    render(){
        return(
      
          <Grid item xs={3}>
            <Card>
            <Image wrapped ui={false} src={this.renderImage(this.props.cookingSession.recipe_id)} /> 
            <Card.Content>
              <Card.Header textAlign='center' >{this.props.cookingSession.title}</Card.Header>
              <Card.Meta textAlign='center'>
                <span>{this.props.cookingSession.date}</span>
              </Card.Meta>
              <Card.Description>
                         
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <>
                {/* {this.props.cookingSession.users.map(user => (
                  <p><Icon name='user' />{user.username}</p>
              ))} */}
              </>
            </Card.Content>
          </Card>
          </Grid>
  
        )
    }
}

function mapStateToProps(state){
    return{
        recipes: state.recipes,
        cooking_sessions: state.cooking_sessions,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(MyClassesCard)


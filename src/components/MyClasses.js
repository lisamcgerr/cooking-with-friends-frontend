import React from 'react'
//import { Card } from 'semantic-ui-react'

class MyClassesCard extends React.Component {
    render(){
        return(
            <div>
                <h1>my classes card</h1>
                {this.props.csTitle}
            </div>
        )
    }
}

export default MyClassesCard
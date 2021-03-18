import React from 'react'

class Login extends React.Component {
    state = {
        username: 'lisa',
        password: 'abc'
    }

    handleInput = (e) => { 
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/login', reqObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            //either user login is successful or fails to log in
            //update 
        })
    }

    render(){
        return(
            <div>
                <h3>Sign In</h3>
                    <form onSubmit={this.handleSubmit} >
                        <input name={'username'} onChange={this.handleInput} value={this.state.username} />
                        <input name={'password'} onChange={this.handleInput} value={this.state.password}/>
                        <input type='submit' value='login' />
                    </form>

            </div>
        )
    }
}

export default Login
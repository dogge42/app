import React, { Component } from 'react';
import './style.css'

class Login extends Component {
    render() {
        return (
            <div>
                <h1 className="hello">JavaTpoint</h1>
                <p data-demoAttribute="demo">This website contains the best CS tutorials.</p>

                <h2>Login Form</h2>
                Username: <input type="text"/>
                <br/>
                Password: <input type="password"/>
                <br/>
                <input type="submit"/>

            </div>
        );
    }
}

export default Login;
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        rememberMe: false
    }
    handleChange = (e) => {
        //console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        //console.log(e);
        e.preventDefault();
        console.log(this.state);
    }

    handleCheck = (e) => {
        // console.log('called');
        this.setState({ rememberMe: e.target.checked });
    }

    render() {
        return (
            <div className="container" style={{ paddingTop: '100px', width: "500px" }}>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Log In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                        <div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                            <label class="custom-control-label" style={{fontSize: "14px", color: "gray"}} for="defaultUnchecked">Remember Me</label>
                        </div>
                        </div>
                    <div className="input-field">
                        <Button variant="outline-primary">Login</Button>
                    </div>
                    <div>
                        <a href="/signup">Sign up </a> with a new account.
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
    render() {
        return (
            <div className="container" style={{ paddingTop: '100px', width: "500px" }}>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Confirm password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        {/* <button className="btn pink lighten-1 z-depth-0">Sign Up</button> */}
                        <Button variant="outline-primary">Sign Up</Button>
                    </div>
                </form>
                <div>
                   <p>If you already have an account, <a href="/signin">click here</a> to log in </p>
                </div>
            </div>
        )
    }
}

export default SignUp;

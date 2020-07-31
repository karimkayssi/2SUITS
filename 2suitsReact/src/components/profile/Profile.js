import React, { Component } from 'react'

class Profile extends Component {
    state = {
        residenceCountry: '',
        occupation: '',
        company: ''
    }
    handleChange = (e) => {
        //console.log(e);
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        //console.log(e);
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>
                    </form>
                </div>

                <div className="input-field">
                    <label htmlFor="residenceCountry">Country of residence</label>
                    <input type="text" id="residenceCountry" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="occupation">Occupation</label>
                    <input type="text" id="occupation" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="company">Company / Institution</label>
                    <input type="text" id="company" onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}

export default Profile

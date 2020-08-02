import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Profile extends Component {
    state = {
        residenceCountry: '',
        occupation: '',
        company: ''
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
            <div>
                <div className="container" style={{ paddingTop: '100px', width: "500px" }}>
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Profile</h5>
                        <div className="input-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>

                        {/* <div className="input-field">
                            <label htmlFor="residenceCountry">Country of residence</label>
                            <input type="text" id="residenceCountry" onChange={this.handleChange} />
                        </div> */} 
                        <div className="input-field">
                            <label htmlFor="occupation">Occupation</label>
                            <input type="text" id="occupation" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="company">Company / Institution</label>
                            <input type="text" id="company" onChange={this.handleChange} />
                        </div>
                        {/* <div className="container mt-4 style={{width:'400px'}}">
                            <h2>Select country</h2>
                            <div className="pd-flag-select pd-flag-primary">
                                <select className="pdf-countries"></select>
                                <select class="selectpicker countrypicker" data-flag="true" ></select>
                            </div>
                        </div> */}
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">Save changes</button>
                            &nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile;
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'

var input = {
    placeholderTextColor: 'black',
    height: '25px',
    paddingLeft: '12px',
    backgroundColor: '#87ceeb',
}

const Contact = () => {

    return (
        <div style={{ backgroundColor: "rgba(255,255,255, 0.8)", width: "100%" }} >
            <div className="row" style={{ width: "100%", margin: "0px" }} >
                <div className="col-6 p-5">
                    <h4>Contact Us</h4>
                    <p>500 Francois Street <br />
                San Francisco</p>
                    <p>Tel: 03012345 <br /> Fax: 012345678</p>
                </div>
                <div className="col-6 p-4">
                    <div className="form-group" >
                        <label style={{ fontSize: '16px', color: 'black' }}>Your Name</label>
                        <input className="form-control" type="text" placeholder="Name" />
                    </div>
                    <div className="form-group" >
                        <label style={{ fontSize: '16px', color: 'black' }}>Your Email</label>
                        <input className="form-control" type="text" placeholder="Email" />
                    </div>
                    <div className="form-group" >
                        <label style={{ fontSize: '16px', color: 'black' }}>How can we help ?</label>
                        <input className="form-control" type="text" placeholder="Message" />
                    </div>
                    <div style={{ alignContent: "center" }} className="text-right">
                        <button className="btn-lg">Send</button>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default Contact;
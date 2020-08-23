import ReactDOM from 'react-dom';
import React from 'react';
import "./ProjectDetails.css";

var imgSize = {
    width: '100%',
    height: "150px",
    objectFit: "cover"
}

const ProjectDetails = (props) => {
    return (
        <div style={{
            border: "#202020 5px solid",
            maxWidth: '300px',
            backgroundColor: '#f4f4ff',
            display: 'inline-block',
            cursor: 'pointer',
        }}>
            <div className="container section project-details" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden',
                height: '380px'
            }}>
                <div className=" z-depth-0">
                    <span className="card-title text-dark" style={{ fontSize: 18, overflow: 'hidden', textOverflow: 'ellipsis' }}>{props.title}</span>
                </div>
                <br />
                <div style={{
                    overflow: 'hidden',
                    marginRight: '-17px',
                }}>
                    <p className="text-dark" style={{
                        width: '100%',
                        height: '100%',
                        overflowY: 'scroll',
                        paddingRight: '17px',
                        boxSizing: 'content-box'
                    }}>
                        {props.tagline}
                    </p>
                </div>
                <br />
                <div style={{ flex: 1 }}></div>
                <img src={props.img} style={imgSize} />
                <div className="card z-depth-0">
                </div>
            </div>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ProjectDetails />, rootElement);

export default ProjectDetails;
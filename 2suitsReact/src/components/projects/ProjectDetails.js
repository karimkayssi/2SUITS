import ReactDOM from 'react-dom';
import React from 'react';
import "./ProjectDetails.css";

var imgSize = {
    width: '296px',
    height: '200px',
    marginTop: '-14px',
    marginLeft: '-15px',
}

const ProjectDetails = (props) => {
    return (
        <div style={{
            border: "#202020 5px solid",
            maxWidth: '300px',
            backgroundColor: '#f4f4ff',
            display: 'inline-block'
        }}>
            <div className="container section project-details">
                <div className=" z-depth-0">
                    <span className="card-title" style={{ fontSize: 18 }}>{props.title}</span>
                    {/* style={{ height: "50px", overflow: "auto" }} */}
                    <p>{props.tagline}</p>
                </div>
                <div className="img-hover-zoom" >
                    <img src={props.img} style={imgSize} />
                </div>
                <div className="card z-depth-0">
                </div>
            </div>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ProjectDetails />, rootElement);

export default ProjectDetails;
import React from 'react';


function Project(props){

    return(
        <div className="col-md-4 my-2 imgCaption">
        {console.log(props.image)}
        <div className="container mx-5">
            <a href={props.link} target="_blank">
                <img className="  d-flex" src={props.image} alt="coming soon" />
                <div className="caption  d-flex justify-content-center">
                    <h6 className="bColor text-white width350 text-center">{props.title}</h6>
                </div>
            </a>
        </div>
    </div>
    )
}
export default Project;
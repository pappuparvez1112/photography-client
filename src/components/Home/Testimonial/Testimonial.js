
import { faAudioDescription } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Testimonial = ({description, name, image,text}) => {
    
    return (
        <div className="card shadow-sm d-flex col-md-3 ms-5 ">
            <div className="card-body ">
                <p className="card-text text-center">{description}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img style={{backgroundSize:"cover",backgroundRepeat:"no-repeat"}} className="mx-3" src={'http://localhost:5000'+image} alt="" width="60"/>
                <div>
                    <h6 className="text-primary ">{name}</h6>
                    <p className="m-0">{text}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;
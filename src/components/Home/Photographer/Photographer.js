import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Photographer = ({email, name, image}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={'http://localhost:5000/'+image} alt=""/>
            <h4>{name}</h4>
            <h6>{email}</h6>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};



export default Photographer;
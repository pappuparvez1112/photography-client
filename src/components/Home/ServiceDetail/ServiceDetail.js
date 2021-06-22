import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className=" card shadow-sm d-flex col-md-3 text-center mb-5 ms-5">
            <img style={{height: '300px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
             <button className="btn btn-success">click here</button>       
        </div>

    );
};

export default ServiceDetail;
import React from 'react';
import weeding from '../../../images/weeding.jpg';
import birthday from '../../../images/birthday.jpg';
import event from '../../../images/event.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'weeding collection',
        img: weeding
    },
    {
        name: 'birthday collection',
        img: birthday
    },
    {
        name: 'event collection',
        img: event
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5 mr-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;
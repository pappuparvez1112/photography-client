import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Booking = () => {
    const history=useHistory()
    const [booking, setBooking] = useState({});

    const handleBlur = e => {
        const newBooking = { ...booking };
        newBooking[e.target.name] = e.target.value;
        setBooking(newBooking);
    }

    const handleSubmit = data => {
        const formData = new FormData()
        
        
        formData.append('email', booking.email);
        formData.append('name', booking.name);
        formData.append('location', booking.location);
        formData.append('category', booking.category);
        console.log(data);

        fetch('http://localhost:5000/addBookings', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                
               
                // console.log(data)
            })
            alert('your order successfully done');
             history.replace('/');
            

      };
    return (
        <section className="container mt-5  ">
        <div className=" d-flex justify-content-center text-center col align-self-center   ">
           

            <div className="col-md-5 col-sm-12 col-12 ">

                <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter what your choice" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Adress</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="location" placeholder="Your location" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Birthday/Weeding/Events</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="category" placeholder="Your category" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Booking;
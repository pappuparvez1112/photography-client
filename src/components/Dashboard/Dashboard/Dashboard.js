import React, { useContext, useEffect, useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Submit from '../Submit/Submit';


// import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",

}

const Dashboard = () => {
    // const [registration,setRegistration]=useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/photographer')
    //     .then(res=>res.json())
    //     .then(data=>setRegistration(data))

    // },[])
    

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);\
    



    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/appointmentsByDate', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="row ">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-5 col-sm-12 col-12 ">
                <div className="col-md-8">
                <h3 className="text-center m-5">Manage product</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {/* {
                           registration.map(count=><Submit count={count} ></Submit>)
                       }  
                        */}
                    </tbody>
                </table>

            </div>

                   
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
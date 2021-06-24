import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    backgroundColor: "#F4FDFB",

}



const Clients = () => {

    const [infoOne, setInfoOne] = useState({});
    const [fileOne, setFileOne] = useState(null);
    
    const handleBlur=e=>{
        const newInfoOne = { ...infoOne };
        newInfoOne[e.target.name] = e.target.value;
        setInfoOne(newInfoOne);
    
    }
    const handleFileChange = (e) => {
        const newFileOne = e.target.files[0];
        setFileOne(newFileOne);
    
    }



    const handleSubmit=(data)=>{
        const formData = new FormData()
        
        formData.append('file', fileOne);
        formData.append('name', infoOne.name);
        formData.append('description', infoOne.description);
        formData.append('text', infoOne.text);
        console.log(data);

        fetch('http://localhost:5000/addClients', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })



    }
    
    

    return (

        <section>
        <div style={containerStyle} className="row ">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-5 col-sm-12 col-12 ">

                <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input onBlur={handleBlur} type="name" className="form-control" name="name" placeholder="your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea cols="100" rows="5" onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="write your comments" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="text" placeholder="your address" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>

    );
};

export default Clients;
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';





// import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",

}

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }


    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);

    }

    const handleSubmit = data => {
        const formData = new FormData()
        
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        console.log(data);

        fetch('http://localhost:5000/addPhotographer', {
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
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
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

export default AddService;
import React, {useState, useEffect} from 'react';
import Photographer from '../Photographer/Photographer';
const Photographers = () => {

    const [photographers, setPhotographers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/photographers')
        .then(res => res.json())
        .then(res => {
            setPhotographers(res)
        })
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Photographers</h5>
                <div className="row">
                    {photographers.map(p => <Photographer email={p.email} name={p.name} image={p.file_path} /> )}
                </div>
            </div>
        </section>
    );
};

export default Photographers;
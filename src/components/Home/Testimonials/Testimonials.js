import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
// import wilson from '../../../images/test 1.jpg';
// import ema from '../../../images/test 2.jpg';
// import aliza from '../../../images/test 3.jpg';

// const testimonialData = [
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'ALBART',
//         from : 'California',
//         img : wilson
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'LUCHIFAR',
//         from : 'California',
//         img : ema
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'LINADRI',
//         from : 'California',
//         img : aliza
//     }
// ]

const Testimonials = () => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/clients')
        .then(res => res.json())
        .then(res => {
            setClients(res)
        })
    }, [])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">REVIEWS</h5>
                   <h1>What Our Client says <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        clients.map(t => <Testimonial name={t.name} description={t.description} image={t.file_path} text={t.text}key={t.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;
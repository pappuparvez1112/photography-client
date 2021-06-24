import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services'
import FeaturedService from '../FeaturedService/FeaturedService';
import Blogs from '../Blogs/Blogs'
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer'
import Photographers from '../Photographers/Photographers';

const Home = () => {
    return (
        <div className="container">
            
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Photographers></Photographers>
            <Blogs></Blogs>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;
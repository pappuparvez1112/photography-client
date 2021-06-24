import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Emergency photography" , link: "/emergency"},
        {name: "VIDEO" , link: "VIDEO"},
        {name: "personal phtography" , link: "/personal-photography"},
        {name: "event-photography" , link: "/event-photography"},
        {name: "VIDEO" , link: "VIDEO"},
    ]
    const ourAddress = [
        {name: "DHAKA - BANGLADESH" , link: "//google.com/map"},
        {name: "DHANMONDI" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency photography" , link: "/emergency"},
        {name: "Photo" , link: "Photo"},
        {name: "personal phtography" , link: "/personal-photography"},
        {name: "event photography" , link: "/event-photography"},
        {name: "Photo" , link: "Photo"},
        {name: "Photo" , link: "Photo"},
        {name: "Photo" , link: "Photo"}
    ]
    const services = [
        {name: "Emergency photography" , link: "/emergency"},
        {name: "SHOT" , link: "SHOT"},
        {name: "personal phtography" , link: "/personal-photography"},
        {name: " event photography" , link: "/event-photography"},
        {name: "SHOT" , link: "SHOT"},
        {name: "SHOT" , link: "SHOT"},
        {name: "SHOT" , link: "SHOT"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="photography quality" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;
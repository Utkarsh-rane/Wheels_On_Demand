import React from 'react';
import './About.css'; // Make sure the path is correct
import carlogo from '../../img/carse.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1 className="about-us-title">Welcome to Auto Solutions</h1>
            <hr className="divider" />
            <div className="about-us-content">
                <div className="image-container">
                    <img src={carlogo} alt="Auto Solutions Logo" className="company-logo" />
                </div>
                <div className="description-container">
                    <p className="about-us-description">
                        India's Premier Used Car Dealer. At Auto Solutions, our commitment has always been to provide a seamless experience for both car buyers and owners. With a focus on excellence and convenience, we bridge the gap between buyers and sellers, ensuring that you find the perfect car at the right price.
                    </p>
                    <p className="about-us-description">
                        Our mission is to revolutionize the way you buy and sell used cars. We pride ourselves on offering a curated selection of quality vehicles, each meticulously inspected and maintained to ensure your satisfaction.
                    </p>
                    <p className="about-us-description">
                        Why choose us? Our team of experts is dedicated to guiding you through every step of the car buying process. From choosing the ideal vehicle to assisting with financing and paperwork, we're here to make your journey as smooth as possible.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

import React, { useState } from 'react';
import './ContactUs.css'; // Import your CSS file
import utkarshImage from '../../img/user.png'; // Import Utkarsh's image
import darshanImage from '../../img/user.png'; // Import Darshan's image

const ContactUs = () => {
    const [showThanks, setShowThanks] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For the sake of demonstration, we'll just show the "Thank you" message.
        setShowThanks(true);
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <hr />

            <div className="contact-details">
                <div className="contact-person">
                    <img src={utkarshImage} alt="Utkarsh Rane" className="person-image" />
                    <div className="person-info">
                        <h3>Utkarsh Rane</h3>
                        <p>Email: utkarshrane456@gmail.com</p>
                        <p>Phone: 8412010627</p>
                    </div>
                </div>
                <div className="contact-person">
                    <img src={darshanImage} alt="Darshan Patil" className="person-image" />
                    <div className="person-info">
                        <h3>Darshan Patil</h3>
                        <p>Email: darshanpatil123@gmail.com</p>
                        <p>Phone: 9075139839</p>
                    </div>
                </div>
            </div>

            <div className="feedback-form">
                {showThanks ? (
                    <div className="thanks-message">
                        <p>Thank you for your feedback!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactUs;

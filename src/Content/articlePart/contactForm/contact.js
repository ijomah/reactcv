import React, { useState } from "react";
import "./contact.css";

const ContactMe = () => {
    const [name, setName] = useState({
        id: null,
        first_name: null || "",
        last_name: null || "",
        email: null || ""
    });

    const handleChange = ({target}) => {
        setName({...name, [target.name]: target.value});
    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <div className="contact-form">
                <h3 className="form-heading">Contact Form</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="first_name" id="fname">First Name:</label>
                        <input type="text" onChange={handleChange} value={name.first_name} className="form-control"  name="first_name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name" id="lname">Last Name:</label>
                        <input type="text" onChange={handleChange} value={name.last_name}  name="last_name" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" id="email">Email:</label>
                        <input type="email" onChange={handleChange} value={name.email}  name="email" className="form-control"/>
                    </div>
                    <button>Submit</button>
                    <button>Cancel</button>
                </form>
                
            </div>
        </div>
    )
}

export default ContactMe
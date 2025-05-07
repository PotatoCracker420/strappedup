import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Melding sendt!");
    };

    return (
        <div className="contact-form">
            <h2>Kontakt oss</h2>
            <form onSubmit={handleSubmit}>
                <label>Navn:</label>
                <input type="text" name="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                <label>E-post:</label>
                <input type="email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

                <label>Melding:</label>
                <textarea name="message" onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>

                <button type="submit">Send melding</button>
            </form>
        </div>
    );
};

export default ContactForm;

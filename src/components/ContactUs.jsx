import React from "react";

function ContactUs() {
    return (<div className="contact-us">
        <h1 className="other-headings">Contact Us</h1>
        <p>Send us a message in case of any query. We'll get back to you as soon as possible.</p>
        <div className="form-inside">
        <form action="">
            <input type="text"  placeholder="Name" />
            <input type="text"  placeholder="Registration No." />
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Enter your message here..."></textarea>
        </form>
        <img src="https://cdn.pixabay.com/photo/2017/09/25/18/56/social-media-2786261_1280.jpg" alt="quiz img" />
        </div>
    </div>);
}

export default ContactUs;
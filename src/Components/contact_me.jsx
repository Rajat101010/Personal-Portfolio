import React, { useState } from "react";
import Swal from 'sweetalert2'


function ContactMe() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "6f5357d8-55bf-422c-b961-6c29d3474786");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };

    return <>
        <section className="contact">
            <form onSubmit={onSubmit}>
                <center>
                    <font className='project_font_1'>
                        <b>Contact</b>
                    </font>
                    <font className='project_font_2'> <b>Form</b>
                    </font>
                </center>
                <div className="input-box">
                    <label>Full Name</label>
                    <br />
                    <input type="text" className="field" placeholder="Enter your name" name='name' required />
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <br />
                    <input type="email" className="field" placeholder="Enter your email" name="email" required />
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <br />
                    <textarea name="message" className="field mess" placeholder="Enter your message" required></textarea>
                </div>
                <br />
                <center>
                    <button type="submit" class="contact_send_message">
                        <font className="projects_view_more">
                            Send Message
                        </font>
                    </button>
                </center>
            </form>
        </section>
    </>
}

export default ContactMe;
import './ContactSection.css'
import xlogo from '../images/xlogo.svg'
import linkedlogo from '../images/linkedinlogo.svg'
import emaillogo from '../images/emaillogo.svg'
import githublogo from '../images/GitHub.svg'
import React, { useState } from 'react';


function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Handle successful submission if needed
                console.log("Form Submitted")
            } else {
                // Handle error if needed

            }
        } catch (error) {
            console.log(error)
            // Handle error if needed
        }
        setEmail('');
        setName('');
        setMessage('');
    };

    return (
        <footer>
            <div className='contactwrapper' id='contact'>
                <h1><span class="underline under1">Co</span>ntact</h1>
                <section>
                    <div className='contactlogowrapper'>
                        <div>
                            <a
                                href="https://twitter.com/mrpetrate"
                                target="_blank"
                                rel='noreferrer'
                            ><img src={xlogo} alt="xlogo" /></a>
                            <p><a
                                href="https://twitter.com/mrpetrate"
                                target="_blank"
                                rel='noreferrer'
                            >X (Twitter)</a></p>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/peter-ademurewa-adelakun-b0142522b/"
                                target="_blank"
                                rel='noreferrer'
                            ><img src={linkedlogo} alt="linkedlogo" /></a>
                            <p><a
                                href="https://www.linkedin.com/in/peter-ademurewa-adelakun-b0142522b/"
                                target="_blank"
                                rel='noreferrer'
                            >LinkedIn</a></p>
                        </div>
                        <div>
                            <a
                                href="mailto:adelakunpeter7@gmail.com"
                                target="_blank"
                                rel='noreferrer'
                            ><img src={emaillogo} alt="emaillogo" /></a>
                            <p><a
                                href="mailto:adelakunpeter7@gmail.com"
                                target="_blank"
                                rel='noreferrer'
                            >Email</a></p>
                        </div>
                        <div>
                            <a href="https://github.com/devpetrate"
                                target="_blank" rel='noreferrer'>
                                <img src={githublogo} alt="githublogo" /></a>
                            <p><a href="https://github.com/devpetrate"
                                target="_blank" rel='noreferrer'>GitHub</a></p>
                        </div>
                    </div>
                    <form action='https://docs.google.com/forms/d/e/1FAIpQLScJY5Dm1jKwBkSJOD9rHbSqJsUhcYuf8O3Lgs-Ij8YFmzuP4g/formResponse'
                        className='contactmessageboxwrapper'
                        onSubmit={handleSubmit} >
                        <input
                            type='email'
                            name='entry.145471532'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='text'
                            name='entry.518290871'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <textarea
                            name='entry.1106899058'
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button disabled={!name || !email || !message} type='submit'>Contact Me!</button>
                        {submitted && <p>Thank You! Your response has been noted.</p>}
                    </form>
                </section>
                <section className='contactrights'>
                    <p>All rights reserved © 2023</p>
                </section>
            </div>
        </footer>
    )
}

export default ContactSection

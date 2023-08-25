import './ContactSection.css'
import xlogo from '../images/xlogo.svg'
import linkedlogo from '../images/linkedinlogo.svg'
import emaillogo from '../images/emaillogo.svg'
import githublogo from '../images/GitHub.svg'


function ContactSection() {
    return (
        <div className='contactwrapper'>
            <h1><span class="underline">Co</span>ntact</h1>
            <section>
                <div className='contactlogowrapper'>
                    <div>
                        <img src={xlogo} alt="xlogo" />
                        <p>X (Twitter)</p>
                    </div>
                    <div>
                        <img src={linkedlogo} alt="linkedlogo" />
                        <p>LinkedIn</p>
                    </div>
                    <div>
                        <img src={emaillogo} alt="emaillogo" />
                        <p>Email</p>
                    </div>
                    <div>
                        <img src={githublogo} alt="githublogo" />
                        <p>GitHub</p>
                    </div>
                </div>
                <div className='contactmessageboxwrapper'>
                    <input type="text" placeholder='Email' />
                    <input type='text' placeholder='Name' />
                    <textarea placeholder='Message'></textarea>
                    <button>Contact Me!</button>
                </div>
            </section>
            <section className='contactrights'>
                <p>All rights reserved © 2023</p>
            </section>
        </div>
    )
}

export default ContactSection

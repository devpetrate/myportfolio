import './PortfolioSection.css'
import React from 'react'
import Portimg1 from '../images/interactivecard.png'
import gitlogo from '../images/GitHub.svg'
import weblogo from '../images/Internet.svg'
import portimg2 from '../images/littlelemon.png'
import portimg3 from '../images/advicegenerator.png'
import portimg4 from '../images/newslettersignup.png'
import portimg5 from '../images/loginform.png'
import dictimg from '../images/dictionarypage.png'
import introimg from '../images/intropage.png'
import movieimg from '../images/moviepage.png'



function Portfoliofullpage() {

    // const pfpstyles = {
    //     padding: "0px 0px 100px 0px"
    // };

    return (
        <div className='portfoliowrapper'>
            <h1><span class="underline">Po</span>rtfolio</h1>

            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>English Dictionary</h2>
                    <p>Built using: HTML, CSS, JavaScript and API</p>
                    <div className='portlogowrapper'>
                        <a href="https://github.com/devpetrate/dictionary"
                            target="_blank"
                            rel="noreferrer"><img src={gitlogo} alt="gitlogo" /></a>
                        <p><a href="https://github.com/devpetrate/dictionary"
                            target="_blank"
                            rel="noreferrer">Github</a></p>
                        <a href="https://devpetrate.github.io/dictionary/"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://devpetrate.github.io/dictionary/"
                            target="_blank"
                            rel="noreferrer">Website</a></p>
                    </div>
                </div>
                <img className='workpic' src={dictimg} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Movie Page</h2>
                    <p>Built using: HTML, CSS, JavaScript and API</p>
                    <div className='portlogowrapper'>
                        <a href="https://github.com/devpetrate/moviePage"
                            target="_blank"
                            rel="noreferrer"><img src={gitlogo} alt="gitlogo" /></a>
                        <p><a href="https://github.com/devpetrate/moviePage"
                            target="_blank"
                            rel="noreferrer">Github</a></p>
                        <a href="https://devpetrate.github.io/moviePage/"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://devpetrate.github.io/moviePage/"
                            target="_blank"
                            rel="noreferrer">Website</a></p>
                    </div>
                </div>
                <img className='workpic' src={movieimg} alt="" />
            </section>

            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Interactive Card</h2>
                    <p>Built using: HTML, CSS and JavaScript</p>
                    <div className='portlogowrapper'>
                        <a href="https://github.com/devpetrate/interactive-card"
                            target="_blank"
                            rel="noreferrer"><img src={gitlogo} alt="gitlogo" /></a>
                        <p><a href="https://github.com/devpetrate/interactive-card"
                            target="_blank"
                            rel="noreferrer">Github</a></p>
                        <a href="https://devpetrate.github.io/interactive-card/"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://devpetrate.github.io/interactive-card/"
                            target="_blank"
                            rel="noreferrer">Website</a></p>
                    </div>
                </div>
                <img className='workpic' src={Portimg1} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Advice Generator</h2>
                    <p>Built using: HTML, CSS, JavaScript and API</p>
                    <div className='portlogowrapper'>
                        <a href="https://github.com/devpetrate/Advice-Generator"
                            target="_blank"
                            rel="noreferrer"><img src={gitlogo} alt="gitlogo" /></a>
                        <p><a href="https://github.com/devpetrate/Advice-Generator"
                            target="_blank"
                            rel="noreferrer">Github</a></p>
                        <a href="https://devpetrate.github.io/Advice-Generator/"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://devpetrate.github.io/Advice-Generator/"
                            target="_blank"
                            rel="noreferrer">Website</a></p>
                    </div>
                </div>
                <img className='workpic' src={portimg3} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Little Lemon Restaurant</h2>
                    <p>Built using: React</p>
                    <div className='portlogowrapper'>
                        <a href="https://github.com/devpetrate/Little-Lemon"
                            target="_blank"
                            rel="noreferrer"><img src={gitlogo} alt="gitlogo" /></a>
                        <p><a href="https://github.com/devpetrate/Little-Lemon"
                            target="_blank"
                            rel="noreferrer">Github</a></p>
                        <a href="https://devpetrate.github.io/Little-Lemon/"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://devpetrate.github.io/Little-Lemon/"
                            target="_blank"
                            rel="noreferrer">Website</a></p>
                    </div>
                </div>
                <img className='workpic' src={portimg2} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Snap Landing Page</h2>
                    <p>Built using: HTML, CSS and JavaScript</p>
                    <div className='portlogowrapper'>
                        <a href="https://github.com/devpetrate/intro-section"
                            target="_blank"
                            rel="noreferrer"><img src={gitlogo} alt="gitlogo" /></a>
                        <p><a href="https://github.com/devpetrate/intro-section"
                            target="_blank"
                            rel="noreferrer">Github</a></p>
                        <a href="https://devpetrate.github.io/intro-section/"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://devpetrate.github.io/intro-section/"
                            target="_blank"
                            rel="noreferrer">Website</a></p>
                    </div>
                </div>
                <img className='workpic' src={introimg} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>News Letter Signup</h2>
                    <p>Built using: HTML, CSS and JavaScript</p>
                    <div className='portlogowrapper'>
                        <a href="https://github.com/devpetrate/newsletter-sign-up"
                            target="_blank"
                            rel="noreferrer"><img src={gitlogo} alt="gitlogo" /></a>
                        <p><a href="https://github.com/devpetrate/newsletter-sign-up"
                            target="_blank"
                            rel="noreferrer">Github</a></p>
                        <a href="https://devpetrate.github.io/newsletter-sign-up/"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://devpetrate.github.io/newsletter-sign-up/"
                            target="_blank"
                            rel="noreferrer">Website</a></p>
                    </div>
                </div>
                <img className='workpic' src={portimg4} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Login Form</h2>
                    <p>Built using: HTML, CSS and JavaScript</p>
                    <div className='portlogowrapper'>
                        <a href="https://github.com/devpetrate/Login001"
                            target="_blank"
                            rel="noreferrer"><img src={gitlogo} alt="gitlogo" /></a>
                        <p><a href="https://github.com/devpetrate/Login001"
                            target="_blank"
                            rel="noreferrer">Github</a></p>
                        <a href="https://devpetrate.github.io/Login001/"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://devpetrate.github.io/Login001/"
                            target="_blank"
                            rel="noreferrer">Website</a></p>
                    </div>
                </div>
                <img className='workpic' src={portimg5} alt="" />
            </section>

        </div>
    )
}
export default Portfoliofullpage
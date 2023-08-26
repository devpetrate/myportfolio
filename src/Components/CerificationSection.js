import './PortfolioSection.css'
import React from 'react'
import cert1 from "../images/metacert.png"
import weblogo from '../images/Internet.svg'
import cert2 from '../images/frontfcccert.png'
import cert3 from '../images/jsfcccert.png'
import cert4 from '../images/respfcccert.png'


function CertificationSection() {
    // const csstyles = {

    // };
    return (
        <div className='portfoliowrapper'>
            <h1><span class="underline">Ce</span>rtification</h1>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2><a href="https://coursera.org/share/d5835975b0e7481499ac501328421c23"
                        target="_blank"
                        rel="noreferrer">Meta Front-End Developer</a></h2>
                    <p>Completed Meta's Front-End Developer Certificate,
                        mastering React, Version Control, UX/UI Design principles,
                        and gaining in-depth knowledge of HTML, CSS, and JavaScript.
                        This comprehensive learning equips me to craft dynamic interfaces
                        and excel in modern web development.</p>
                    <div className='portlogowrapper'>
                        <a href="https://coursera.org/share/d5835975b0e7481499ac501328421c23"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://coursera.org/share/d5835975b0e7481499ac501328421c23"
                            target="_blank"
                            rel="noreferrer">Certificate Page</a></p>
                    </div>
                </div>
                <a href="https://coursera.org/share/d5835975b0e7481499ac501328421c23"
                    target="_blank"
                    rel="noreferrer"><img className='workpic' src={cert1} alt="" /></a>
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2><a href="https://www.freecodecamp.org/certification/Petrate/front-end-development-libraries"
                        target="_blank"
                        rel="noreferrer">Front-End Development Libraries by freeCodeCamp</a></h2>
                    <p>Completed the Front End Development Libraries curriculum
                        on freeCodeCamp, where I immersed myself in mastering essential
                        tools and technologies. From harnessing the power of Bootstrap,
                        jQuery, and SASS to building dynamic interfaces with React and
                        Redux, I've acquired a versatile skill set that enables me to
                        create modern, feature-rich web applications.</p>
                    <div className='portlogowrapper'>

                        <a href="https://www.freecodecamp.org/certification/Petrate/front-end-development-libraries"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://www.freecodecamp.org/certification/Petrate/front-end-development-libraries"
                            target="_blank"
                            rel="noreferrer">Certificate Page</a></p>
                    </div>
                </div>
                <a href="https://www.freecodecamp.org/certification/Petrate/front-end-development-libraries"
                    target="_blank"
                    rel="noreferrer"><img className='workpic' src={cert2} alt="" /></a>
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2><a href="https://www.freecodecamp.org/certification/Petrate/javascript-algorithms-and-data-structures"
                        target="_blank"
                        rel="noreferrer">JavaScript Algorithms and Data Structures by freeCodeCamp </a></h2>
                    <p>Completing the JavaScript Algorithms and Data Structures curriculum on freeCodeCamp
                        has been a transformative journey. From mastering the basics of JavaScript and ES6
                        to tackling complex challenges in Regular Expressions, Data Structures, and Algorithms,
                        I've honed my problem-solving skills and deepened my understanding of programming principles,
                        equipping me with the expertise to solve intricate coding challenges and build efficient, scalable applications.</p>
                    <div className='portlogowrapper'>

                        <a href="https://www.freecodecamp.org/certification/Petrate/javascript-algorithms-and-data-structures"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://www.freecodecamp.org/certification/Petrate/javascript-algorithms-and-data-structures"
                            target="_blank"
                            rel="noreferrer">Certificate Page</a></p>
                    </div>
                </div>
                <a href="https://www.freecodecamp.org/certification/Petrate/javascript-algorithms-and-data-structures"
                    target="_blank"
                    rel="noreferrer"><img className='workpic' src={cert3} alt="" /></a>
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2><a href="https://www.freecodecamp.org/certification/Petrate/responsive-web-design"
                        target="_blank"
                        rel="noreferrer">Responsive Web Design by freeCodeCamp </a></h2>
                    <p>Embarking on the Responsive Web Design curriculum on freeCodeCamp has been an immersive experience.
                        Starting with learning HTML by building a Cat Photo App and progressing through various milestones,
                        including CSS Transforms by building a Penguin, I've cultivated a solid foundation in Basic CSS,
                        HTML Forms, Flexbox, CSS Animation, and more. This journey has equipped me with the skills needed
                        to craft engaging, responsive web experiences that seamlessly adapt to different devices and screen sizes.</p>
                    <div className='portlogowrapper'>

                        <a href="https://www.freecodecamp.org/certification/Petrate/responsive-web-design"
                            target="_blank"
                            rel="noreferrer"><img src={weblogo} alt="gitlogo" /></a>
                        <p><a href="https://www.freecodecamp.org/certification/Petrate/responsive-web-design"
                            target="_blank"
                            rel="noreferrer">Certificate Page</a></p>
                    </div>
                </div>
                <a href="https://www.freecodecamp.org/certification/Petrate/responsive-web-design"
                    target="_blank"
                    rel="noreferrer"><img className='workpic' src={cert4} alt="" /></a>
            </section>
        </div>
    )
}
export default CertificationSection
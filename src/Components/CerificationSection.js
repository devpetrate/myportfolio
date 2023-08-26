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
                    <h2>Meta Front-End Developer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>
                        <img src={weblogo} alt="gitlogo" />
                        <p>Certificate Page</p>
                    </div>
                </div>
                <img className='workpic' src={cert1} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Front-End Development Libraries by freeCodeCamp</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>

                        <img src={weblogo} alt="gitlogo" />
                        <p>Certificate Page</p>
                    </div>
                </div>
                <img className='workpic' src={cert2} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>JavaScript Algorithms and Data Structures by freeCodeCamp </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>

                        <img src={weblogo} alt="gitlogo" />
                        <p>Certificate Page</p>
                    </div>
                </div>
                <img className='workpic' src={cert3} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Responsive Web Design by freeCodeCamp </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>

                        <img src={weblogo} alt="gitlogo" />
                        <p>Certificate Page</p>
                    </div>
                </div>
                <img className='workpic' src={cert4} alt="" />
            </section>
        </div>
    )
}
export default CertificationSection
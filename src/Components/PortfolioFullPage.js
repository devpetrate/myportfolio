import './PortfolioSection.css'
import React from 'react'
import Portimg1 from '../images/interactivecard.png'
import gitlogo from '../images/GitHub.svg'
import weblogo from '../images/Internet.svg'
import portimg2 from '../images/littlelemon.png'



function Portfoliofullpage() {

    const pfpstyles = {
        padding: "0px 0px 100px 0px"
    };

    return (
        <div className='portfoliowrapper' style={pfpstyles}>
            <h1><span class="underline">Po</span>rtfolio</h1>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Interactive Card</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>
                        <img src={gitlogo} alt="gitlogo" />
                        <p>Github</p>
                        <img src={weblogo} alt="gitlogo" />
                        <p>Website</p>
                    </div>
                </div>
                <img className='workpic' src={Portimg1} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Little Lemon Restaurant</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>
                        <img src={gitlogo} alt="gitlogo" />
                        <p>Github</p>
                        <img src={weblogo} alt="gitlogo" />
                        <p>Website</p>
                    </div>
                </div>
                <img className='workpic' src={portimg2} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Interactive Card</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>
                        <img src={gitlogo} alt="gitlogo" />
                        <p>Github</p>
                        <img src={weblogo} alt="gitlogo" />
                        <p>Website</p>
                    </div>
                </div>
                <img className='workpic' src={Portimg1} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Little Lemon Restaurant</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>
                        <img src={gitlogo} alt="gitlogo" />
                        <p>Github</p>
                        <img src={weblogo} alt="gitlogo" />
                        <p>Website</p>
                    </div>
                </div>
                <img className='workpic' src={portimg2} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Interactive Card</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>
                        <img src={gitlogo} alt="gitlogo" />
                        <p>Github</p>
                        <img src={weblogo} alt="gitlogo" />
                        <p>Website</p>
                    </div>
                </div>
                <img className='workpic' src={Portimg1} alt="" />
            </section>
            <section className='portfoliojobswrapper'>
                <div className='portwordswrapper'>
                    <h2>Little Lemon Restaurant</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='portlogowrapper'>
                        <img src={gitlogo} alt="gitlogo" />
                        <p>Github</p>
                        <img src={weblogo} alt="gitlogo" />
                        <p>Website</p>
                    </div>
                </div>
                <img className='workpic' src={portimg2} alt="" />
            </section>
        </div>
    )
}
export default Portfoliofullpage
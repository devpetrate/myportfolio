import './PortfolioSection.css'
import React from 'react'
import Portimg1 from '../images/interactivecard.png'
import gitlogo from '../images/GitHub.svg'
import weblogo from '../images/Internet.svg'
import portimg2 from '../images/littlelemon.png'
import { Link } from 'react-router-dom';


function Portfoliosection() {
    return (
        <div className='portfoliowrapper'>
            <h1><span class="underline">Po</span>rtfolio</h1>
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
            <Link to="/portfolio"><button>Explore More!</button></Link>
        </div>
    )
}
export default Portfoliosection
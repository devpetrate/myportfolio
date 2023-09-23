import './PortfolioSection.css'
import React from 'react'
import dictimg from '../images/dictionarypage.png'
import movieimg from '../images/moviepage.png'
import gitlogo from '../images/GitHub.svg'
import weblogo from '../images/Internet.svg'
import { Link } from 'react-router-dom';


function Portfoliosection() {
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
            <Link to="/portfolio"><button>Explore More!</button></Link>
        </div>
    )
}
export default Portfoliosection
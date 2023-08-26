import './MainSection.css';
import React, { useState, useEffect } from 'react';
import mainimg from '../images/mainlogo.png'

function Mainsection() {
    const [skills] = useState([
        'HTML', 'CSS', 'JavaScript', 'React', 'UI Design'
    ]);

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [skills.length]);

    return (
        <div className='mainwrapper'>
            <section className='mainword'>
                <h1>HI! My Name Is Peter,</h1>
                <h1>A Front-End Developer,</h1>
                <h1>Proficient in {skills[currentSkillIndex]}</h1>
                <a href="https://drive.google.com/file/d/1xQ7Pt8OFnoEvjiOYX6TkNalhVdgwJ95u/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer">
                    <button>Download CV</button></a>
            </section>
            <img src={mainimg} alt="mainlogo" />
        </div>
    )
}

export default Mainsection;
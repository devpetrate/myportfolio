import './AboutSection.css';


function AboutSection() {
    return (
        <div className='aboutwrapper'>
            <h1><span class="underline">Ab</span>out</h1>
            <p>I'm <span className='aboutbold'>Peter Adelakun Ademurewa,</span> a dedicated learner who transitioned into the tech industry
                with a background in Physiology. Through intensive self-study and hands-on practice,
                I've earned <span className='aboutbold'>certifications in Responsive Web Design, JavaScript Algorithms and Data Structures,
                    and Front End Libraries from freeCodeCamp, as well as a Front-End Developer certification through
                    Meta - Coursera.</span> </p>
            <p>My GitHub repository showcases diverse projects where I've translated my learning
                into tangible web solutions, spanning interactive interfaces to responsive layouts. As I continue to
                learn, build, and grow, I am excited about the potential to create meaningful and impactful
                technological solutions.</p>
            <p>With a strong foundation in responsive web design, JavaScript, and
                front-end libraries, <span className='aboutbold'>I am poised to embrace new challenges and contribute positively to the
                    dynamic world of technology.</span> I'm enthusiastic about the opportunity to collaborate with experienced
                developers, bringing fresh insights and a strong foundation in front-end development to future projects.</p>
            <section>
                <a href="https://drive.google.com/file/d/1fqSCrgJY5G5k0BcjuHyrfU49XIOPhkXc/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer">
                    <button >Download CV</button></a>
            </section>
        </div>
    )
}

export default AboutSection
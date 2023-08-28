import './SkillsNCodeSnippetSection.css'
import './SkillsSection.css'
import './PortfolioSection.css'
import js from '../images/JSsign.svg'
import css from '../images/csssign.svg'
import html from '../images/htmlsign.svg'
import ui from '../images/uisign.svg'
import react from '../images/reactsign.svg'
import cp from '../images/codepenicon.svg'
import gitlogo from '../images/GitHub.svg'


function SkillsNCodeSnippetSection() {
    return (
        <>

            {/* Code Snippet */}

            <div className='portfoliowrapper'>
                <h1><span class="underline">Co</span>de Snippets</h1>
                <section className='sncswrapper'>
                    <section className='portfoliojobswrapper sncsjobwrapper'>
                        <div className='portwordswrapper'>
                            <h2><a href="https://github.com/devpetrate?tab=repositories"
                                target="_blank"
                                rel="noreferrer">GitHub Repositories</a></h2>
                            <p>Discover my GitHub repositories, a curated collection of projects that
                                highlight my proficiency in web development, including interactive websites,
                                responsive layouts, and dynamic user interfaces. From sleek HTML and CSS designs
                                to feature-rich JavaScript applications, each repository embodies my dedication
                                to crafting engaging online experiences while adhering to coding best practices.</p>
                            <div className='portlogowrapper'>
                                <a href="https://github.com/devpetrate?tab=repositories"
                                    target="_blank"
                                    rel="noreferrer"><img src={gitlogo} alt="gitlogo" /></a>
                                <p><a href="https://github.com/devpetrate?tab=repositories"
                                    target="_blank"
                                    rel="noreferrer">View my repositories</a></p>
                            </div>
                        </div>
                    </section>
                    <section className='portfoliojobswrapper sncsjobwrapper'>
                        <div className='portwordswrapper'>
                            <h2><a href="https://codepen.io/Peter-Adelakun"
                                target="_blank"
                                rel="noreferrer">CodePen</a></h2>
                            <p>Explore my CodePen portfolio for concise and elegant code snippets that
                                showcase my expertise in creating responsive web elements with meticulous attention to detail,
                                delivering seamless user experiences with a touch of creativity.
                                Each snippet exemplifies my proficiency in HTML, CSS, and JavaScript,
                                capturing the essence of modern web design and interactivity.</p>
                            <div className='portlogowrapper'>
                                <a href="https://codepen.io/Peter-Adelakun"
                                    target="_blank"
                                    rel="noreferrer"><img src={cp} alt="CPlogo" /></a>
                                <p><a href="https://codepen.io/Peter-Adelakun"
                                    target="_blank"
                                    rel="noreferrer">View my pen</a></p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

            {/* Skills */}

            <div className='skillswrapper'>
                <h1><span class="underline">Sk</span>ills</h1>

                <section className='skillicons'>
                    <h2>JavaScript</h2>
                    <img src={js} alt="jssign" />
                    <h2>React</h2>
                    <img src={react} alt="reactsign" />
                    <h2>jQuery</h2>
                    <img src={js} alt="jssign" />
                    <h2>Redux</h2>
                    <img src={react} alt="reactsign" />
                    <h2>User Testing</h2>
                    <img src={react} alt="reactsign" />
                    <h2>Git</h2>
                    <img src={js} alt="jssign" />
                    <h2>HTML</h2>
                    <img src={html} alt="htmlsign" />
                    <h2>CSS</h2>
                    <img src={css} alt="csssign" />
                    <h2>UI Design</h2>
                    <img src={ui} alt="uisign" />
                    <h2>SASS</h2>
                    <img src={html} alt="htmlsign" />
                    <h2>Bootstrap</h2>
                    <img src={css} alt="csssign" />
                    <h2>tailwind</h2>
                    <img src={ui} alt="uisign" />
                </section>
            </div>
        </>
    )
}

export default SkillsNCodeSnippetSection
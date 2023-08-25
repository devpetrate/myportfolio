import './SkillsSection.css'
import js from '../images/JSsign.svg'
import css from '../images/csssign.svg'
import html from '../images/htmlsign.svg'
import ui from '../images/uisign.svg'
import react from '../images/reactsign.svg'

function SkillsSection() {
    return (
        <div className='skillswrapper'>
            <h1><span class="underline">Sk</span>ills</h1>

            <section className='skillicons'>
                <h2>JavaScript</h2>
                <img src={js} alt="jssign" />
                <h2>HTML</h2>
                <img src={html} alt="htmlsign" />
                <h2>CSS</h2>
                <img src={css} alt="csssign" />
                <h2>React</h2>
                <img src={react} alt="reactsign" />
                <h2>UI Design</h2>
                <img src={ui} alt="uisign" />
            </section>
        </div>
    )
}
export default SkillsSection
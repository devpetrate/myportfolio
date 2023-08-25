import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import "./GeneralMain.css"
import Mainsection from "./MainSection"
import Portfoliosection from "./PortfolioSection"
import SkillsSection from "./SkillsSection"

function GeneralMain() {
    return (
        <div className="generalmainswrapper">
            <main>
                <Mainsection /><hr />
                <Portfoliosection /><hr />
                <SkillsSection /><hr />
                <AboutSection /><hr />
                <ContactSection />
            </main>
        </div>
    )
}
export default GeneralMain
import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import "./GeneralMain.css"
import Mainsection from "./MainSection"
import Portfoliofullpage from "./PortfolioFullPage"
import Portfoliosection from "./PortfolioSection"
import SkillsSection from "./SkillsSection"
import { Routes, Route } from 'react-router-dom';

function GeneralMain() {
    return (
        <div className="generalmainswrapper">
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<>
                            <Mainsection /><hr />
                            <Portfoliosection /><hr />
                            <SkillsSection /><hr />
                            <AboutSection /><hr />
                            <ContactSection />
                        </>
                        }></Route>
                </Routes>
                <Routes>
                    <Route
                        path="/portfolio"
                        element={<>
                            <Portfoliofullpage /><hr />
                            <ContactSection />
                        </>
                        }></Route>
                </Routes>

            </main>
        </div>
    )
}
export default GeneralMain
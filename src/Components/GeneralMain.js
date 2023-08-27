import AboutSection from "./AboutSection"
import CertificationSection from "./CerificationSection"
import "./GeneralMain.css"
import Mainsection from "./MainSection"
import Portfoliofullpage from "./PortfolioFullPage"
import Portfoliosection from "./PortfolioSection"
import SkillsNCodeSnippetSection from "./SkillsNCodeSnippetSection"
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
                            <AboutSection />

                        </>
                        }></Route>
                </Routes>
                <Routes>
                    <Route
                        path="/portfolio"
                        element={<>
                            <Portfoliofullpage />

                        </>
                        }></Route>
                </Routes>
                <Routes>
                    <Route
                        path="/about"
                        element={<>
                            <AboutSection /><hr />
                            <CertificationSection />

                        </>
                        }></Route>
                </Routes>
                <Routes>
                    <Route
                        path="/skills"
                        element={<>
                            <SkillsNCodeSnippetSection />

                        </>
                        }></Route>
                </Routes>

            </main>
        </div>
    )
}
export default GeneralMain
import HomeBanner from "../components/HomeBanner/HomeBanner"
import About from "../components/About/About"
import Skills from "../components/About/Skills"
import Experience from "../components/About/Experience"
import OtherExperience from "../components/About/OtherExperience"


function Home(){
    return (   
        <>
            <HomeBanner/>
            <About/>
            <Skills/>
            <Experience/>
            <OtherExperience/>
        </>
    )
}
export default Home
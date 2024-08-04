import "./Projects.css"
import NavGap from "../components/NavGap.jsx";
import SlideLeftBox from "../components/SlideLeftBox.jsx";
import SlideRightBox from "../components/SlideRightBox.jsx";
import FadeText from "../components/FadeText.jsx";

//Add a languages I use and Libraries I love section
const Projects = () => {
    return(
        <>
            <div style={{height: "calc(4.5vw + 70px)", background: 'rgb(101,68,191)'}}/>
            <div style={{background: 'rgb(101,68,191)'}}>
                <div className={"main-header"}>
                    <FadeText prop={{info: "Projects"}}/>
                    <hr style={{width: "25%", marginTop: "-9px"}}/>
                </div>
                <div style={{zIndex: "10"}}>
                    <SlideLeftBox prop={{head: "projects?select=id,name,description&id=eq.1"}}/>
                    <SlideRightBox prop={{head: "projects?select=id,name,description&id=eq.2"}}/>
                </div>
                <div style={{zIndex: "10", marginTop: "calc(6vw + 23vh)"}}>
                    <SlideLeftBox prop={{head: "projects?select=id,name,description&id=eq.3"}}/>
                    <SlideRightBox prop={{head: "projects?select=id,name,description&id=eq.4"}}/>
                </div>
                <div className={"main-text"} style={{marginTop: "calc(-6vw - 23vh)"}}>
                    <FadeText prop={{
                        info: "Here is a collection of my 4 favorite projects across multiple languages." +
                            " I've worked hard on each of these, however some required higher degrees of technical" +
                            " skill while others required creativity. These projects are diverse and display " +
                            "some of my abilities as a Software Engineer. Other projects are also visible on my " +
                            "GitHub and many others can be seen in the academics section of this site."
                    }}/>
                </div>
            </div>
        </>


    )
}

export default Projects;
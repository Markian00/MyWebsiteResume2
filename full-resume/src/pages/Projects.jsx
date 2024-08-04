import "./Projects.css"
import NavGap from "../components/NavGap.jsx";
import SlideLeftBox from "../components/SlideLeftBox.jsx";

const Projects = () => {
    return(
        <>
            <div style={{height: "calc(4.5vw + 70px)", background: 'rgb(101,68,191)'}}/>
            <div style={{background: 'rgb(101,68,191)'}}>
                <div className={"main-header"}>
                    <text>
                        WORDS RIGHT?
                    </text>
                </div>
                <div style={{zIndex: "10"}}>
                    <SlideLeftBox prop={{info: "WORDS", head: "1"}}/>
                </div>

            </div>
        </>


    )
}

export default Projects;
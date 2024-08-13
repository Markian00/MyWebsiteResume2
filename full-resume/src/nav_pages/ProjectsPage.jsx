import "./Projects.css"
import NavGap from "../components/NavGap.jsx";
import LanguageBubble from "../components/LanguageBubble.jsx";
import SlideLeftBox from "../components/SlideLeftBox.jsx";
import SlideRightBox from "../components/SlideRightBox.jsx";
import FadeText from "../components/FadeText.jsx";
import Wave from "react-wavify";
import ProjectsScroll from "../components/ProjectsScroll.jsx";
import {useEffect} from "react";

//Add a languages I use and Libraries I love section
const ProjectsPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <div style={{position: "relative", width: "100%", overflowX: "hidden"}}>
            <NavGap/>
            <div className={"main-header"}>
                <FadeText prop={{info: "Projects"}}/>
            </div>
            <div style={{maxWidth: "100vw", overflowX: "hidden"}}>
                <SlideLeftBox prop={{head: "projects?select=id,name,description&id=eq.1"}}/>
                <SlideRightBox prop={{head: "projects?select=id,name,description&id=eq.2"}}/>
            </div>
            <div style={{marginTop: "calc(6vw + 23vh)"}}>
                <SlideLeftBox prop={{head: "projects?select=id,name,description&id=eq.3"}}/>
                <SlideRightBox prop={{head: "projects?select=id,name,description&id=eq.4"}}/>
            </div>
            <div className={"main-text"} style={{marginTop: "calc(-5vw - 23vh)"}}>
                <FadeText prop={{
                    info: "Here is a collection of my 4 favorite projects across multiple languages." +
                        " I've worked hard on each of these, however some required higher degrees of technical" +
                        " skill while others required creativity. These diverse projects display just " +
                        "some of my abilities as a Software Engineer. Other personal projects are visible on my " +
                        "GitHub and school projects can be seen on the Academics section of this site."
                }}/>
            </div>

            <Wave fill='rgb(155,125,240)'
                  paused={false}
                  style={{display: 'flex', paddingTop: "60px"}}
                  options={{
                      height: 20,
                      amplitude: 50,
                      speed: 0.15,
                      points: 5
                  }}
            />

            <div style={{background: 'rgb(155,125,240)'}}>
                <div className={"main-header"} style={{paddingTop: "10px", marginBottom: "20px"}}>
                    <FadeText prop={{info: "Personal Projects"}}/>
                </div>
                <div style={{height: "80vh", width: "80%", marginLeft: "10%", marginRight: "10%"}}>
                    <ProjectsScroll
                        prop={{head: "projects?select=name,description,school,class,id&school=eq.0&order=id.asc&limit=100"}}/>
                </div>

                <Wave fill='rgb(101,68,191)'
                      paused={false}
                      style={{display: 'flex', background: "rgb(155,125,240)", marginTop: "calc(3vh + 5vw)"}}
                      options={{
                          height: 15,
                          amplitude: 50,
                          speed: 0.15,
                          points: 4,
                      }}
                />

                <div style={{background: "rgb(101,68,191)"}}>
                    <div className={"main-header"} style={{color: "rgb(185,166,237)"}}>
                        <FadeText prop={{info: "Languages and Tools"}}/>
                    </div>
                    <div className={"column-text"} style={{display: "flex", marginTop: "5vh", paddingBottom: "5vh"}}>
                        <div style={{width: "37%", marginLeft: "10%", marginRight: "3%"}}>
                            <LanguageBubble prop={{
                                head: "languages?select=name,description,professionally,id&id=eq.1",
                                info: "https://cplusplus.com/"
                            }}/>
                        </div>
                        <div style={{width: "37%", marginLeft: "3%", marginRight: "10%"}}>
                            <LanguageBubble prop={{
                                head: "languages?select=name,description,professionally,id&id=eq.2",
                                info: "https://www.javascript.com/"
                            }}/>
                        </div>
                    </div>
                    <div className={"column-text"} style={{display: "flex", marginTop: "5vh", paddingBottom: "5vh"}}>
                        <div style={{width: "37%", marginLeft: "10%", marginRight: "3%"}}>
                            <LanguageBubble prop={{
                                head: "languages?select=name,description,professionally,id&id=eq.3",
                                info: "https://www.python.org/"
                            }}/>
                        </div>
                        <div style={{width: "37%", marginLeft: "3%", marginRight: "10%"}}>
                            <LanguageBubble prop={{
                                head: "languages?select=name,description,professionally,id&id=eq.4",
                                info: "https://flutter.dev/"
                            }}/>
                        </div>
                    </div>
                    <div className={"column-text"} style={{display: "flex", marginTop: "5vh", paddingBottom: "10vh"}}>
                        <div style={{width: "37%", marginLeft: "10%", marginRight: "3%"}}>
                            <LanguageBubble prop={{
                                head: "languages?select=name,description,professionally,id&id=eq.5",
                                info: "https://www.java.com/en/"
                            }}/>
                        </div>
                        <div style={{width: "37%", marginLeft: "3%", marginRight: "10%"}}>
                            <LanguageBubble prop={{
                                head: "languages?select=name,description,professionally,id&id=eq.6",
                                info: "https://learn.microsoft.com/en-us/dotnet/csharp/"
                            }}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default ProjectsPage;
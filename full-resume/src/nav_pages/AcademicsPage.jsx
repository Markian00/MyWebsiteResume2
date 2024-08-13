import ProjectsScroll from "../components/ProjectsScroll.jsx";
import NavGap from "../components/NavGap.jsx";
import FadeText from "../components/FadeText.jsx";
import "./Academics.css"
import Wave from "react-wavify";
import AcademicsScroll from "../components/AcademicsScroll.jsx";
import SchoolBox from "../components/SchoolBox.jsx";
import EmailForm from "../components/EmailForm.jsx";
import {useEffect} from "react";


const AcademicsPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <>
            <NavGap/>

            <div className={"header-text"} style={{marginTop: "20px", marginBottom: "5px"}}>
                <FadeText prop={{info: "My Education"}}/>
            </div>
            <div style={{display: "flex", width:"84%", marginRight:"8%", marginLeft: "8%"}}>
                <SchoolBox prop={{info: "2023 - Current", head: "University of Michigan Ann Arbor"}}/>
                <SchoolBox prop={{info: "2021 - 2022", head: "University of Toronto Saint George"}}/>
            </div>
            <div className={"header-text-small"}>
                <FadeText prop={{info: "Certificates"}}/>
            </div>
            <div style={{width: "80%", marginLeft: "10%", marginRight: "10%"}}>
                <AcademicsScroll
                    prop={{
                        head: "classes?select=name,grade,engineer,id&engineer=eq.2&order=id.desc&limit=100",
                        info: "30vh"
                    }}/>
            </div>
            <div className={"header-text-small"}>
                <FadeText prop={{info: "Engineering Course Work"}}/>
            </div>
            <div style={{width: "80%", marginLeft: "10%", marginRight: "10%"}}>
                <AcademicsScroll
                    prop={{
                        head: "classes?select=name,grade,engineer,id&engineer=eq.1&order=id.desc&limit=100",
                        info: "50vh"
                    }}/>
            </div>
            <div className={"header-text-small"}>
                <FadeText prop={{info: "English Course Work"}}/>
            </div>
            <div style={{width: "80%", marginLeft: "10%", marginRight: "10%", marginBottom: "50px"}}>
                <AcademicsScroll
                    prop={{
                        head: "classes?select=name,grade,engineer,id&engineer=eq.0&order=id.desc&limit=100",
                        info: "30vh"
                    }}/>
            </div>

            <Wave fill='rgb(155,125,240)'
                  paused={false}
                  style={{display: 'flex'}}
                  options={{
                      height: 20,
                      amplitude: 50,
                      speed: 0.15,
                      points: 5
                  }}
            />

            <div style={{background: "rgb(155,125,240)"}}>
                <div className={"header-texts2"} style={{marginTop: "-10px"}}>
                    <FadeText prop={{info: "School Projects"}}/>
                </div>
                <div className={"normal-text"}>
                    <FadeText prop={{info: "(More Coming)"}}/>
                </div>
                <div style={{height: "80vh", width: "80%", marginLeft: "10%", marginRight: "10%"}}>
                    <ProjectsScroll
                        prop={{head: "projects?select=name,description,school,class,id&school=eq.1&order=id.asc&limit=100"}}/>
                </div>
            </div>

            <Wave fill='rgb(101,68,191)'
                  paused={false}
                  style={{display: 'flex', background: "rgb(155,125,240)", paddingTop: "15px"}}
                  options={{
                      height: 15,
                      amplitude: 40,
                      speed: 0.15,
                      points: 4,
                  }}
            />

            <div style={{background: 'rgb(101,68,191)', alignContent: "center"}}>
                <div className={"header-text"} style={{marginBottom: "15px", color: "#dad2f4"}}>
                    <FadeText prop={{info: "Contact Me"}}/>
                </div>
                <div style={{display: "flex", flexWrap:"wrap", width: "76vw", margin: "10vw", marginTop:"0vw", justifyContent: "center", background: 'rgb(84,52,169)', borderRadius: "20px", verticalAlign: "middle", padding:"2vw"}}>
                    <div className={"normal-text-wide"} style={{
                        width: "50vh",
                        padding: "5vh",
                        color: "#dad2f4",
                        paddingTop: "30px",
                        minWidth: "80px",
                        fontWeight: "bolder",
                        verticalAlign: "middle"
                    }}>
                        <div style={{height: "20px"}}/>
                        <FadeText prop={{info: "Want to see my transcripts?"}}/>
                        <div style={{height: "10px"}}/>
                        <FadeText prop={{info: "Need to request code from my school projects?"}}/>
                        <div style={{height: "10px"}}/>
                        <FadeText prop={{info: "Maybe you just want to talk!"}}/>
                        <div style={{height: "20px"}}/>
                        <FadeText
                            prop={{info: "Send me a Request here in Ukrainian, English or Russian and I'll get back to you!"}}/>
                    </div>
                    <div style={{width: "40vh", padding: "10vh", paddingTop: "10px", paddingBottom: "10px"}}>
                        <EmailForm/>
                    </div>
                </div>

            </div>


        </>
    )
}

export default AcademicsPage;
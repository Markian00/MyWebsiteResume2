import "../components/Animate.css"
import "./Landing.css"
import NavGap from "../components/NavGap.jsx";
import FadeText from "../components/FadeText.jsx";
import FadeBox from "../components/FadeBox.jsx";
import FadeImage from "../components/FadeImage.jsx";
import FadeIcon from "../components/FadeIcon.jsx";
import FadeLink from "../components/FadeLink.jsx";
import selfImage from "../images/ResumeImage.jpg"
import selfImagenBG from "../images/selfImageNoBG.png"
import spinGear1 from "../images/spinningGears.gif"
import spinGear2 from "../images/spinningGearsReversed.gif"
import GitHub from "../images/GitHubIcon.png"
import LinkedIn from "../images/LinkedInIcon.png"
import Wave from 'react-wavify'
import {Link} from "react-router-dom";


const Landing = () => {
    window.scrollTo(0, 0)
    return (
        <>
            <NavGap/>
            <div>
                <div className={"regular-text"} style={{marginTop: "15px"}}>
                    <FadeText prop={{
                        info:
                            "Hello I'm"
                    }}/>
                </div>
                <div className={"header-text"}>
                    <FadeText prop={{
                        info:
                            "MARKIAN VORONOVYCH"
                    }}/>
                </div>

                <div className={"box"}>
                    <FadeImage prop={{info: selfImagenBG}}/>
                    <div style={{width: "30%", marginRight: "20%"}}>
                        <FadeBox prop={{info: "GPA", head: "3.83"}}/>
                        <FadeLink prop={{info: LinkedIn, link: "https://www.linkedin.com/in/markian-voronovych-1b930322b"}}/>
                    </div>
                    <div style={{width: "30%", marginLeft: "20%"}}>
                        <FadeBox prop={{info: "Languages", head: ">5 "}}/>
                        <FadeLink prop={{info: GitHub, link: "https://github.com/Markian00"}}/>
                    </div>
                </div>

                <Wave fill='rgb(155,125,240)'
                      paused={false}
                      style={{display: 'flex'}}
                      options={{
                          height: 10,
                          amplitude: 50,
                          speed: 0.15,
                          points: 5
                      }}
                />

                <div className={"box"} style={{background: 'rgb(155,125,240)'}}>
                    <div style={{width: "20%"}}>
                        <FadeIcon prop={{info: spinGear1}}/>
                    </div>
                    <div style={{width: "60%"}}>
                        <div className={"header-text"} style={{marginTop: "1vw"}}>
                            <FadeText prop={{
                                info:
                                    "SOFTWARE ENGINEERING"
                            }}/>
                        </div>
                        <div className={"regular-text"} style={{marginTop: "15px"}}>
                            <FadeText prop={{
                                info:
                                    "In my short Software Engineering Career I've had the opportunity to work with " +
                                    "Javascript and Flutter professionally. I've also studied Python " +
                                    "Java, C and C++ in University. My relentless personality and detail oriented mind define my work " +
                                    " in software engineering. I'm a fast learner and an adaptable developer because " +
                                    "I have an undeniably strong grasp of the fundamentals."
                            }}/>
                        </div>
                        <div className={"important-text"} style={{marginBottom: "3vh", marginTop: "2vh"}}>
                            <FadeText prop={{
                                info:
                                    "I Enjoy Work Involving: Concurrent Programming, Front-End Web Development" +
                                    " and Data Integration."
                            }}/>
                        </div>
                    </div>
                    <div style={{width: "20%"}}>
                        <FadeIcon prop={{info: spinGear2}}/>
                    </div>
                </div>

                <div className={"box"} style={{background: 'rgb(155,125,240)'}}>
                    <Link to='/Projects/' className={"link-button"}>
                        Learn More
                    </Link>
                </div>


                <Wave fill='rgba(144, 110, 237)'
                      paused={false}
                      style={{display: 'flex', background: "rgb(155,125,240)"}}
                      options={{
                          height: 15,
                          amplitude: 50,
                          speed: 0.15,
                          points: 5,
                      }}
                />

                <div className={"box"} style={{background: 'rgba(144, 110, 237)'}}>
                    <div style={{width: "70%", marginLeft: "15%", marginRight: "15%"}}>
                        <div className={"header-text"} style={{marginTop: "1vw"}}>
                            <FadeText prop={{
                                info:
                                    "CYBER SECURITY"
                            }}/>
                        </div>
                        <div className={"regular-text"} style={{marginTop: "15px"}}>
                            <FadeText prop={{
                                info:
                                    "As a Senior I am currently taking Computer Networks, Computer Security, Cryptography " +
                                    "and Operating Systems at the University of Michigan. In my own time I have completed " +
                                    "the TryHacKMe array of courses and am active on HackTheBox. By winter of my Senior" +
                                    " Year I will have completed my CompTIA Sec+ Certification. I am well-acquainted with " +
                                    "Unix systems, I've even built pagers and thread libraries for them!"
                            }}/>
                        </div>
                        <div className={"important-text"} style={{marginBottom: "2vh", marginTop: "2vh"}}>
                            <FadeText prop={{
                                info:
                                    "I Enjoy Work Involving: Penetration Testing, Zero-Knowledge Proofs" +
                                    " and Information-Theoretic Secure Algorithms."
                            }}/>
                        </div>
                    </div>
                </div>

                <div className={"box"} style={{background: 'rgba(144, 110, 237)'}}>
                    <Link to='/Projects/' className={"link-button"}>
                        Learn More
                    </Link>
                </div>

                <Wave fill='rgb(101,68,191)'
                      paused={false}
                      style={{display: 'flex', background: "rgba(144, 110, 237)"}}
                      options={{
                          height: 15,
                          amplitude: 50,
                          speed: 0.15,
                          points: 4,
                      }}
                />

                <div className={"box"} style={{background: 'rgb(101,68,191)'}}>
                    <div style={{width: "70%", marginLeft: "15%", marginRight: "15%"}}>
                        <div className={"header-text"} style={{marginTop: "1vw", color: "rgb(185,166,237)"}}>
                            <FadeText prop={{
                                info:
                                    "DEVOPS AND DATABASES"
                            }}/>
                        </div>
                        <div className={"regular-text"} style={{marginTop: "15px", color: "rgb(185,166,237)"}}>
                            <FadeText prop={{
                                info:
                                    "In the past I've done some limited work with Firebase, Google Cloud Platform (GCP), " +
                                    "Amazon Web Services (AWS) and Supabase. I've also worked with Rack Servers using " +
                                    "CISCO CLI. I've got experience reading logs to identify issues in PostGreSQL Databases" +
                                    " and RESTful API Implementations. I'm comfortable with writing SQL Queries and using " +
                                    "the FireBase API in both Flutter and Javascript. You may notice that this entire " +
                                    "website is hosted on AWS!"
                            }}/>
                        </div>
                        <div className={"important-text"}
                             style={{marginBottom: "7vh", marginTop: "2vh", color: "rgb(198,183,238)"}}>
                            <FadeText prop={{
                                info:
                                    "I Enjoy Work Involving: PostGreSQL Queries and Analyzing Server Logs"
                            }}/>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Landing;
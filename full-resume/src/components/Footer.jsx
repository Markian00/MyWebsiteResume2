import "./Footer.css"
import Wave from "react-wavify";
import Logo from "../assets/logo.png"
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <>
            <Wave fill='#392f66'
                  paused={false}
                  style={{display: 'flex', background: "rgb(101,68,191)"}}
                  options={{
                      height: 3,
                      amplitude: 15,
                      speed: 0.15,
                      points: 2,
                  }}
            />
            <div className={"footer"}>
                <div className={"footer-content"}>
                    <div className={"image-set"} style={{width: "15%", textAlign: "center"}}>
                        <img src={Logo.src}/>
                        <div>
                            Last Updated: August 2024
                        </div>
                    </div>

                    <div className={"link-set"}>
                        <div className={"section-head"}>
                            Top Projects
                        </div>
                        <div>
                            <Link to="/projects/1" className={"link-page"}>
                                Multi-Threaded File Server
                            </Link>
                        </div>
                        <div>
                            <Link to="/projects/2" className={"link-page"}>
                                My Website ResumePage
                            </Link>
                        </div>
                        <div>
                            <Link to="/projects/3" className={"link-page"}>
                                Secure Hash Algorithm
                            </Link>
                        </div>
                        <div>
                            <Link to="/projects/4" className={"link-page"}>
                                Amazon Look-Alike
                            </Link>
                        </div>
                    </div>

                    <div className={"link-set"}>
                        <div className={"section-head"}>
                            Contact Info
                        </div>
                        <div className={"link-page"}>
                            markv2021@gmail.com
                        </div>
                        <div className={"link-page"}>
                            voronovy@umich.edu
                        </div>
                        <div className={"link-page"}>
                            +1 (248) 320 0915
                        </div>
                        <div className={"link-page"}>
                            More on Home Page
                        </div>
                    </div>

                    <div className={"link-set"}>
                        <div className={"section-head"}>
                            Main Pages
                        </div>
                        <div>
                            <Link to="/Home" className={"link-page"}>
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to="/Resume" className={"link-page"}>
                                Resume
                            </Link>
                        </div>
                        <div>
                            <Link to="/Academics" className={"link-page"}>
                                Academics
                            </Link>
                        </div>
                        <div>
                            <Link to="/Projects" className={"link-page"}>
                                Projects
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Footer
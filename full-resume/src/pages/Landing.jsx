import "../components/Animate.css"
import "./Landing.css"
import FadeText from "../components/FadeText.jsx";
import FadeBox from "../components/FadeBox.jsx";
import FadeImage from "../components/FadeImage.jsx";
import selfImage from "../images/ResumeImage.jpg"
import selfImagenBG from "../images/selfImageNoBG.png"

const Landing = () => {
    return (
        <>
            <div style={{height: "1800px"}}>
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
                <div className={"half-box"}>
                    <FadeImage prop={{info: selfImagenBG}}/>
                </div>



            </div>
        </>

    )
}

export default Landing;
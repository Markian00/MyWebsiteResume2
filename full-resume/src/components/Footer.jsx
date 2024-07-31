import "./Footer.css"
import Wave from "react-wavify";

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
                Here will be stuff for the footer to have links and a last updated date and all that
            </div>
        </>

    )
}

export default Footer
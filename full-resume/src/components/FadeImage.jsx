import {useEffect, useRef, useState} from "react";
import "./Animate.css"


const FadeImage = ({prop}) => {
    const [isVisible, setVisible] = useState(false);
    const domCurr = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(items => {
            const [item] = items
            if (!isVisible){
                setVisible(item.isIntersecting)
            }
            else{
                setVisible(true);
            }
            })
        observer.observe(domCurr.current)
    });

    return(
        <div className={`${isVisible ? 'visible' : 'fading-up'}`}
             style={{zIndex: "10", position: "absolute", marginLeft: "30%", marginRight:"30%", marginTop: "2vw",
                 marginBottom: "2vw", alignText:"center"}}
             ref={domCurr}>
            <img src={prop.info.src} alt={'Should be image here'} width={"auto"}/>
        </div>
    )
}

export default FadeImage
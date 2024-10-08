import {useEffect, useRef, useState} from "react";
import "./Animate.css"


const FadeBox = ({prop}) => {
    const [isVisible, setVisible] = useState(false);
    const domCurr = useRef(null);

    useEffect(() => {
        const options = {root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 0
        }
        const observer = new IntersectionObserver(items => {
            const [item] = items
            setVisible(item.isIntersecting)
            }, options)
        if (isVisible){
            observer.unobserve(domCurr.current)
        }
        else{
            observer.observe(domCurr.current)
        }
    });

    return(
        <div className={`${isVisible ? 'visible-box' : 'fading-up-box'}`} ref={domCurr}>
            <div style={{fontWeight: "bolder", fontSize: "5vw"}}>
                {prop.head}
            </div>
            {prop.info}
        </div>
    )
}

export default FadeBox
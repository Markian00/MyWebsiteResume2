import {useEffect, useRef, useState} from "react";
import "./Animate.css"


const FadeLink = ({prop}) => {
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
        <div className={`${isVisible ? 'visible-box' : 'fading-up-box'}`} style={{fontSize: "1.7vw"}} ref={domCurr}>
            <a href={prop.link}>
                <img src={prop.info} alt={'Should be image here'} style={{width: "55%"}}/>
            </a>
        </div>
    )
}

export default FadeLink
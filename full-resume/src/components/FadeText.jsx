import {useEffect, useRef, useState} from "react";
import "./Animate.css"


const FadeText = ({prop}) => {
    const [isVisible, setVisible] = useState(false);
    const domCurr = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(items => {
            const [item] = items
            setVisible(item.isIntersecting)
        })
        if (isVisible){
            observer.unobserve(domCurr.current)
        }
        else{
            observer.observe(domCurr.current)
        }
    });

    return(
        <div className={`${isVisible ? 'visible' : 'fading-up'}`} ref={domCurr}>
            {prop.info}
        </div>
    )
}

export default FadeText
import {useEffect, useRef, useState} from "react";
import "./Animate.css"


const FadeIcon = ({prop}) => {
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
             style={{marginLeft: "15%", marginRight:"15%", marginTop: "2vw",
                 marginBottom: "2vw", alignText:"center"}}
             ref={domCurr}>
            <img src={prop.info.src} alt={'Should be image here'} width={"auto"}/>
        </div>
    )
}

export default FadeIcon
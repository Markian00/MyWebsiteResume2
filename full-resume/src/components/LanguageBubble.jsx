import {useEffect, useRef, useState} from "react";
import "./Animate.css"
import api from "../API.js";


const LanguageBubble = ({prop}) => {
    const [professional, setProfessional] = useState(false);
    const [name, setName] = useState();
    const [content, setContent] = useState();
    const [isVisible, setVisible] = useState(false);
    const domCurr = useRef(null);
    const options = {root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 0
    }
    useEffect(() => {
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
    },[]);

    useEffect(  () =>{
        async function fetch(){
            try{
                const response = await api.get(prop.head).then(res =>{
                    setContent(res.data[0].description)
                    setProfessional(res.data[0].professionally)
                    setName(res.data[0].name)
                })
            } catch(err){
                content
            }
        }
        fetch();
    },[]);

    return(
        <a href={prop.info}>
        <div className={`${isVisible ? 'visible-lang' : 'hidden-lang'}`} style={{width: "100%"}} ref={domCurr}>
            <div style={{fontWeight: "bolder", fontSize: "calc(1.3vw + 1vh)"}}>
                {name}
            </div>
            {content}
            <div className={`${professional ? 'prof' : 'non-prof'}`}>
                Used Professionally
            </div>
        </div>
        </a>
    )
}

export default LanguageBubble
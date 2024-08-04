import {useEffect, useState} from "react";
import API from "../API.js"
import "./Animate.css"


const SlideLeftBox = ({prop}) => {
    const [isVisible, setVisible] = useState(false);

    useEffect( async () =>{
        try{
            const response = await API.get(prop.head, {})
        } catch(err){

        }
    })
    return(
        <div className={`${isVisible ? 'left-box' : 'left-box-hidden'}`} style={{fontSize: "1.7vw"}}>
            <div className={"slide-container"}>
                <div style={{fontWeight: "bolder", fontSize: "1.8vw", width: "60vw"}}>
                    {prop.info}
                </div>
                <button onClick={() => {setVisible(!isVisible)}} className={"num-button"}>
                    {prop.head}
                </button>
            </div>
        </div>
    )
}

export default SlideLeftBox;
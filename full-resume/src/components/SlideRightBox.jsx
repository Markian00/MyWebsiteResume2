import {useEffect, useState} from "react";
import api from "../API.js"
import "./Animate.css"


const SlideRightBox = ({prop}) => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [content, setContent] = useState();
    const [isVisible, setVisible] = useState(false);

    useEffect(  () =>{
        async function fetch(){
            try{
                const response = await api.get(prop.head).then(res =>{
                    setContent(res.data[0].description)
                    setId(res.data[0].id)
                    setName(res.data[0].name)
                })
            } catch(err){
                content
            }
        }
        fetch();

    },[]);

    return(
        <div className={`${isVisible ? 'right-box' : 'right-box-hidden'}`} style={{fontSize: "1.7vw"}}>
            <div className={"slide-container"} style={{borderBottomLeftRadius: "9vw",
                borderTopLeftRadius: "9vw"}}>
                <button onClick={() => {setVisible(!isVisible)}} className={"num-button"}>
                    {id}
                </button>
                <div style={{fontWeight: "bolder", fontSize: "calc(1vw + 0.9vh)", width: "60vw"}}>
                    {name}
                    <div style={{fontWeight: "normal", fontSize: "calc(1vw + 0.7vh)"}}>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideRightBox;
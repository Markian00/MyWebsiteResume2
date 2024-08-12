import {useEffect, useRef, useState} from "react";
import "./Animate.css"
import api from "../API.js";
import ProjectBox from "./ProjectBox.jsx";
import ClassBox from "./ClassBox.jsx";


const AcademicsScroll = ({prop}) => {
    const [postCount, setPostCount] = useState(3);
    const [postArray, setPostArray] = useState([]);
    const [scrollend, setScrollend] = useState(false);

    function scrollHandler(event){
        const element = event.target
        if (element.scrollHeight - element.scrollTop - 5 <= element.clientHeight){
            setScrollend(!scrollend);
            console.log("End");
        }
    }

    useEffect(()=>{
        setPostCount(postCount + 1)
    }, [scrollend])


    useEffect(  () =>{
        async function fetch(){
            try{
                const response = await api.get(prop.head).then(res =>{
                    setPostArray((res.data.map(element => {
                        //Change This
                        return(
                            <ClassBox prop={element} key={element.id}/>
                        )

                    })))
                })
            } catch(err){
                //Change this
                setPostArray([])
            }
        }
        fetch();

    },[]);

    return(
        <div style={{overflowX: "hidden", borderColor: "rgb(113, 82, 194)",
            borderStyle: "solid", borderWidth: "2px", borderRadius: "20px",
            background: "rgba(33,22,60,0.09)"}}>
            <div
                style={{height: prop.info, overflowY: "scroll", width: "100.5%"}}
                onScroll={(e) => {scrollHandler(e)}}>

                {postArray.slice(0, postCount)}

            </div>
        </div>

    )
}

export default AcademicsScroll
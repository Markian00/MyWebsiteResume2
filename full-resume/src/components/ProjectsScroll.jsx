import {useEffect, useRef, useState} from "react";
import "./Animate.css"
import api from "../API.js";


const ProjectsScroll = ({prop}) => {
    const [postCount, setPostCount] = useState(4);
    const [postArray, setPostArray] = useState([]);
    const [scrollend, setScrollend] = useState(false);

    function scrollHandler(event){
        const element = event.target
        if (element.scrollHeight - element.scrollTop == element.clientHeight){
            setScrollend(true);
        }
    }

    useEffect(()=>{
        setTimeout(() =>{setPostCount(postCount + 2)}, 200)
        setScrollend(false)
    }, [scrollend])


    useEffect(  () =>{
        async function fetch(){
            try{
                const response = await api.get(prop.head).then(res =>{
                    setPostArray((res.data.map(element => {
                        //Change This
                        return(
                            <div style={{height: "200px"}}>
                                {element.name}
                            </div>
                        )

                    })))
                })
            } catch(err){
                //Change this
                setPostArray(["nah"])
            }
        }
        fetch();

    },[]);

    return(
        <>
            <div style={{height: "400px", overflowY: "scroll"}} onScroll={(e) => {scrollHandler(e)}}>
                {postArray.slice(0, postCount)}
            </div>

        </>

    )
}

export default ProjectsScroll
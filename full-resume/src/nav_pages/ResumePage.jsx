import NavGap from "../components/NavGap.jsx";
import {useEffect} from "react";

const pdf = {
    width: "100%",
    height: "150vh",
    border: "1px solid black"
}
const ResumePage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <>
            <NavGap/>
            <iframe style={pdf}
                    src="https://markianresume.s3.us-east-2.amazonaws.com/Markian+Voronovych+Resume+2024.pdf"
                    title="Mark's ResumePage"></iframe>
        </>

    );
};


export default ResumePage
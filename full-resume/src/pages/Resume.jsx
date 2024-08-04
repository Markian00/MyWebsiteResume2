import NavGap from "../components/NavGap.jsx";

const pdf = {
    width: "100%",
    height: "150vh",
    border: "1px solid black"
}
const Resume = () => {
    window.scrollTo(0,0)

    return (
        <>
            <NavGap/>
            <iframe style={pdf}
                    src="https://markianresume.s3.us-east-2.amazonaws.com/Markian+Voronovych+Resume+2024.pdf"
                    title="Mark's Resume"></iframe>
        </>

    );
};


export default Resume
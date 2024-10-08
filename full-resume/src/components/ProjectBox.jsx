import "./Animate.css"
import {Link} from "react-router-dom";


const ProjectBox = ({prop}) => {
    return(
        <div className={"project-box"}>
            <div style={{fontWeight: "bolder", fontSize: "calc(0.5vw + 1.1vh)", marginTop: "10px", marginBottom: "10px"}}>
                {prop.name}
            </div>
            {prop.description}
            <div style={{marginTop: "10px", marginBottom: "20px", fontWeight: "bolder", fontSize: "calc(0.5vw + 1.1vh)"}}>
                {prop.class}
            </div>
            <Link to={`/Projects/${prop.id}`} className={"p-button"}>
                Learn More
            </Link>
        </div>
    )
}

export default ProjectBox
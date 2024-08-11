import ProjectsScroll from "../components/ProjectsScroll.jsx";
import NavGap from "../components/NavGap.jsx";


const Academics = () => {
    return(
        <>
            <NavGap/>
            <ProjectsScroll prop={{head: "projects?select=name,description,school,class,id&school=eq.1&order=id.asc&limit=100"}}/>
        </>
    )
}

export default Academics;
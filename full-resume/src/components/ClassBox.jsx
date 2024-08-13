import "./Animate.css"

const ClassBox = ({prop}) => {
    return(
        <div className={"class-box"}>
            <div style={{
                fontWeight: "bolder",
                marginTop: "10px",
                marginBottom: "8px",
                width: "70%",
                marginLeft: '0px',
                textAlign: "left"
            }}>
                {prop.name}
            </div>
            <div style={{
                fontWeight: "bolder",
                fontSize: "calc(1.2vw + 0.8vh)",
                marginTop: "10px",
                marginRight: '5px',
                width: "30%",
                textAlign: "right"
            }}>
                {prop.grade}
            </div>
        </div>
    )
}

export default ClassBox
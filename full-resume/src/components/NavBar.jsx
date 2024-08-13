import logo from "../assets/logo.png"
import { Nav, NavLink, NavMenu } from "./NavbarElements.jsx";
import {Component} from "react";
import "./Animate.css"

const sticky = {
    position: 'fixed',
    top: '0',
    width: '100%',
    margin: '0%',
    padding: '16px',
    borderRadius: '15px'
}

const textsize = {
    fontSize: "1100px"
}
class NavB extends Component{
    render(){

        return(
            <>
                <Nav style={sticky}>

                    <NavMenu style={textsize}>
                        <img src={logo.src} alt="Markian Voronovych Logo" width="6%" style={{width:"7%", marginTop:"-0.7vw", paddingLeft: "2vw", paddingRight: "10px"}}/>
                        <NavLink to="/">
                            HOME
                        </NavLink>
                        <NavLink to="/Resume/">
                            RESUME
                        </NavLink>
                        <NavLink to="/Academics/">
                            ACADEMICS
                        </NavLink>
                        <NavLink to="/Projects/">
                            PROJECTS
                        </NavLink>
                    </NavMenu>
                </Nav>

            </>
        )
    }

}

export default NavB

//CODE BY MARKIAN VORONOVYCH 2024
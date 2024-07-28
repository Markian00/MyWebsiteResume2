//import logo from "./headerLogo.png"

import { Nav, NavLink, NavMenu } from "./NavbarElements.jsx";
import {Component} from "react";

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
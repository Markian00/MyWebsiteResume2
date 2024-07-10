import logo from "./headerLogo.png"
import { Nav, NavLink, NavMenu } from "./NavbarElements.jsx";

const sticky = {
    position: 'fixed',
    top: '0',
    width: '100%',
    margin: 'auto',
    padding: '16px'
}
const padded = {
    marginRight: '2.2vw',
    marginLeft: '2.2vw'
}

const textsize = {
    fontSize: "1100px"
}
class NavB extends React.Component{
    render(){

        return(
            <>
                <Nav style={sticky}>

                    <NavMenu style={textsize}>
                        <img src={logo} alt="Markian Voronovych Logo" width="6.5%" style={padded}/>
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/Resume/">
                            Resume
                        </NavLink>
                        <NavLink to="/Academics/">
                            Academics
                        </NavLink>
                        <NavLink to="/Projects/">
                            Projects
                        </NavLink>
                    </NavMenu>
                </Nav>

            </>
        )
    }

}

export default NavB

//CODE BY MARKIAN VORONOVYCH 2024
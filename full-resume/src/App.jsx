import { useState } from 'react'
import Landing from "./pages/Landing.jsx"
import Footer from "./components/Footer.jsx"
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css'
import NavB from "./components/NavBar.jsx";

const navgap = {
    height: "calc(4.5vw + 70px)",
}
function NavGap(){
    return (
        <div style={navgap}>
        </div>
    )
}
function App() {
    return(<>
        <Router>
            <NavB/>
            <NavGap/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>)
}

export default App

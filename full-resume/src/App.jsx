import { useState } from 'react'
import Landing from "./pages/Landing.jsx"
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx"
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css'
import NavB from "./components/NavBar.jsx";


function App() {
    return(<>
        <Router>
            <NavB/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/Resume" element={<Resume/>}/>
                <Route path="/Projects" element={<Projects/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>)
}

export default App

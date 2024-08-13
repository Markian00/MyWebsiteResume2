import { useState } from 'react'
import Landing from "./pages/Landing.jsx"
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import Academics from "./pages/Academics.jsx";
import Footer from "./components/Footer.jsx"
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import './App.css'
import NavB from "./components/NavBar.jsx";
import InspectProjectPage from "./components/InspectProjectPage.jsx";


function App() {
    return(<>
        <BrowserRouter>
            <NavB/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/Resume/" element={<Resume/>}/>
                <Route path="/Projects/" element={<Projects/>}/>
                <Route path="/Academics/" element={<Academics/>}/>
                <Route path="/Projects/:slug" element={<InspectProjectPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>)
}

export default App

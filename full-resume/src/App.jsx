import { useState } from 'react'
import LandingPage from "./nav_pages/LandingPage.jsx"
import ResumePage from "./nav_pages/ResumePage.jsx";
import AcademicsPage from "./nav_pages/AcademicsPage.jsx";
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
import ProjectsPage from "./nav_pages/ProjectsPage.jsx";


function App() {
    return(<>
        <BrowserRouter>
            <NavB/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/Resume/" element={<ResumePage/>}/>
                <Route path="/Projects/" element={<ProjectsPage/>}/>
                <Route path="/Academics/" element={<AcademicsPage/>}/>
                <Route path="/Projects/:slug" element={<InspectProjectPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>)
}

export default App

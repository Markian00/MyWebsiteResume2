import { useState } from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css'
import NavB from "./components/NavBar.jsx";

function App() {
  return (
    <Router>
        <NavB/>
        <Routes>
            <Route path="/" element={<Landing/>}/>
        </Routes>

    </Router>
  )
}

export default App

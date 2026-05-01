// lib
import { Routes, Route } from "react-router-dom";

// pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// css
import "./App.css";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signup" element= {<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    );
}

export default App;

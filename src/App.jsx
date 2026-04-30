// lib
import { Routes, Route } from "react-router-dom";

// pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// css
import "./App.css";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signup" element= {<Signup />} />
                <Route path="/login" element = {<Login/>} />
            </Routes>
        </>
    );
}

export default App;

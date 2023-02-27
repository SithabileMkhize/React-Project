import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Athletes from "./Pages/Athletes";
import NewAthlete from "./Pages/NewAthlete";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/another" exact element={<>test another</>} />
                <Route path="/Athlete/:id" exact element={<Athletes />} />
                <Route path="/NewAthlete" exact element={<NewAthlete />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
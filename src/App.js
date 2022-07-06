import React from "react";
import Home from "./Home";
import { Routes,Route } from "react-router-dom";
import Singlemovie from "./Singlemovie";
import Error from "./Error";
import "./App.css"

const App = ()=>{
return(
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Singlemovie />} />
        <Route path="*" element={<Error />} />
    </Routes>
    </>
)
};
export default App;
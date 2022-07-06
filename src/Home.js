import React from "react";
//import {  useGlobalContext } from "./context";
import Movies from "./Movies";
import Search from "./Search";

const Home = () =>{
    return(
     <>
     <div className="container">
    <Search />
    <Movies />
    </div>
    </>
    )
}
export default Home;
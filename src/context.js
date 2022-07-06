import React, { useContext, useEffect, useState } from "react";

//const API_URL =`http://www.omdbapi.com/?i=tt3896198&apikey=24bdad83&s=titanic`
export const API_URL =`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider =({children}) =>{
 const [isLoading, setLoading] = useState(true);
 const [movie, setMovie] = useState("");
 const[isError, setIsError] = useState({show:"false",msg:""});
const [query, setQuery] = useState("titanic");


    const getMovies = async(url) => {
        setLoading(true);
    try{
       const res = await fetch(url);
       const data = await res.json();
       console.log(data);
       if(data.Response === "True"){
          setLoading(false)
          setMovie(data.Search || data)
         // setIsError({ show:false, msg:"" })
       }else{
         setIsError({
            show:true,
            msg:data.error
         })
       }
    }catch(error){
        console.log(error);
    }
    }

    useEffect(()=>{
      let timeOut=  setTimeout(()=>{
        getMovies(`${API_URL}&s=${query}`)
      },500); 
      return()=> clearTimeout(timeOut) 
        }, [query])
    return <AppContext.Provider value={{ isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>
}

const useGlobalContext =() =>{
    return  useContext(AppContext)
}
export {AppContext, AppProvider,useGlobalContext}

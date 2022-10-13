import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import {useState, useEffect} from "react";
import Movies from './components/Movies';

function App() {

  const MOVIE_API_URL = "http://www.omdbapi.com/?apikey=a3ad1c44&s=vikings";
  const [isLoading, setisLoading] = useState(true)
  const [movies, setmovies] = useState([])
  const [errormessage, seterrormessage] = useState("")


  useEffect(() => {
    
    fetch(MOVIE_API_URL)
    .then(response => response.json())
    .then(jsonResponse =>{
        // setmovies(jsonResponse.Search)
        setmovies(jsonResponse.Search)
        setisLoading(false)
    } )
    
  }, [])
  
  return (
    <>
        <NavBar/>
        <Search />

        {movies.map((movie, index)=>{
          <Movies key={index} movie={movie}/>
        })}
        
            
       
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import {useState, useEffect} from "react";
import Movies from './components/Movies';
import img1 from "./404-error-pic.jpg"
import axios from "axios"

function App() {

  const endpoint = "http://www.omdbapi.com/?apikey=a3ad1c44&s=vikings"
  const [isLoading, setisLoading] = useState(true)
  const [movies, setmovies] = useState([])
  const [errormessage, seterrormessage] = useState("")
  // const [poster, setposter] = useState("")
  const [movies1, setmovies1] = useState([])

  
  useEffect(() => {
    
    axios.get(endpoint)
    .then(response=>{
      setmovies(response.data.Search)
      console.log(response.data.Search)
      
    })

    // fetch(MOVIE_API_URL)
    // .then(response => response.json())
    // .then(jsonResponse =>{
    //   movies = jsonResponse.Poster
    //   setmovies1(jsonResponse.Search)
    //   setisLoading(false)
    //   console.log(movies)
    //   console.log(movies1)
      
        // setposter(jsonResponse.Poster)
        // setisLoading(false)
    // } )


  }, [])
 

  
 
  return (
    <>
        <NavBar/>
        <Search />
        {/* <div className="container-fluid">
          <div className="row">
        
        </div>
        </div> */}
      <div className="container-fluid bg-transparent mt-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">  
        {movies.map((movie, index)=>(
           <Movies key={index} movie={movie}/>
          
        ))}
        </div>
      </div> 
    </>
  );
}

export default App;

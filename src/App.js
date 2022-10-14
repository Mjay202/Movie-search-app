import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import {useState, useEffect} from "react";
import Movies from './components/Movies';
import img1 from "./404-error-pic.jpg"
import axios from "axios"

function App() {

  
  const endpoint = "http://www.omdbapi.com/?apikey=a3ad1c44&s=iron"
  const [isLoading, setisLoading] = useState(true)
  const [movies, setmovies] = useState([])
  const [errormessage, seterrormessage] = useState("")
  

  
  useEffect(() => {
    
    axios.get(endpoint)
    .then(response=>{
      setmovies(response.data.Search)
      // console.log(response.data.Search)
      setisLoading(false)
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
 
  const search =(searchInput)=>{
    setisLoading(true)
    seterrormessage(null)
    const searchEndpoint = `http://www.omdbapi.com/?apikey=a3ad1c44&s=${searchInput}`
    
    axios.get(searchEndpoint)
    .then(response =>{
        // setmovies(response.data.Search)
        // setisLoading(false)
      if (response.data.Response === "True") {
        setmovies(response.data.Search)
        console.log(response.data.Search)
        setisLoading(false)
        
      } else{
        seterrormessage(response.data.Error)
        setisLoading(false)
      }
      
    })
   
   
  }
  
 
  return (
    <>
        <NavBar/>
        <Search search={search}/>
        {/* <div className="container-fluid">
          <div className="row">
        
        </div>
        </div> */}
      <div className="container-fluid bg-transparent mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">
          
        { isLoading && !errormessage?
          (
          <>
          <div className="col">
            <div className="spinner-grow text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="col">
            <div className="spinner-grow text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="col">
            <div className="spinner-grow text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          </>)
          :
          (errormessage)?
          (<h1>{errormessage}</h1>)
          :
            (movies.map((movie, index)=>(
           <Movies key={index} movie={movie}/>
          
        )))}
        </div>
      </div> 
    </>
  );
}

export default App;

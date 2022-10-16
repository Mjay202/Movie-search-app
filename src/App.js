import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import {useState, useEffect,} from "react";
import Movies from './components/Movies';
import axios from "axios"

function App() {

  // Movie URL
  const endpoint = "http://www.omdbapi.com/?apikey=a3ad1c44&s=iron"
  
  // VAR to check if data is loading
  const [isLoading, setisLoading] = useState(true)
  
  // Array to store our response data
  const [movies, setmovies] = useState([])

  // VAR to store our error message
  const [errormessage, seterrormessage] = useState("")
  

  // To load a default search endpoint onLoad
  useEffect(() => {
    
    axios.get(endpoint)
    .then(response=>{
      setmovies(response.data.Search)
      setisLoading(false)
      
    })
  }, [])

  
 
  // Func to set searchInput as part of endpoint request 
  const search =(searchInput)=>{
    setisLoading(true)
    seterrormessage(null)
    const searchEndpoint = `http://www.omdbapi.com/?apikey=a3ad1c44&s=${searchInput}`
    
    axios.get(searchEndpoint)
    .then(response =>{
      if (response.data.Response === "True") {
        setmovies(response.data.Search)
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
      
          <div className="container-fluid welcome p-3 pt-5">
           
          <Search search={search}/>
            <div className="row row-cols-1 row-cols-lg-2 mt-3">
              <div className="col p-4">
                <h2 className='source-text mt-4'>Welcome</h2> 
                <br />
                <h4 className='source-text another-text'> Camun Studio is your number one web to search for your favourite movies. </h4>
                <br />
                <button  class="btn btn-lg btn-danger" type="button" data-toggle="collapse" data-target="#info" aria-expanded="false" aria-controls="collapseExample">
                  Read Me
                </button>
                <div className="collapse " id='info'>
                <h6 className='sub-source-text text-white mt-5'>Do you have any movie recommendation?</h6> <br />
                <h6 className='sub-source-text text-white'>You want to check out latest movies and series? </h6> <br />
                <h6 className='sub-source-text text-white'>Perfect! We've got you covered here. </h6>
                </div>
                
              </div>
              {/* <div className="col">

              </div> */}
            </div>
          </div>
        
          <div className="container-fluid m-4" style={
            (!isLoading)?
            {display: "block"}:
            {display: "none"}}>
            <h5 className='text-center text-white success-text'>You have {movies.length} search results</h5>
          </div>


          <div className="container-fluid bg-transparent mt-4" >
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">
            
            { isLoading && !errormessage?
             
              (
              <>
              <div className="col">
                <div className="spinner-grow text-danger m-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger m-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger m-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              </>)
              :
              // load errormessage is any
              (errormessage)?
              (<h1>{errormessage}</h1>)
              :
              // else map movies
                (movies.map((movie, index)=>(
              <Movies key={index} movie={movie} index={index}/>
              
            )))}
            </div>
          </div> 
    </>
  );
}

export default App;

import React from 'react'
import errorpic from "../404-boy.jpg"

  const Movies = ({movie}) => {

   
  return (
    <>
       
        {/* <div className="card">
          <div className="card-title">
            <h1>{movie.Title}</h1>
          </div>
          <img src={movie.Poster} alt={movie.Title} className="img-fluid"/>
       </div> */}
       <div className="col">
          <div className="card bg-transparent border-danger shadow-box m-1" >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img src={movie.Poster} alt={movie.Title} className="img-fluid m-image"/>
              </div>
              <div className="col-md-7 bg-dark ">
                <div className="card-body text-white">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Plot}</p>
                  <p className="card-text"><small className="text-muted">{movie.Year}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Movies
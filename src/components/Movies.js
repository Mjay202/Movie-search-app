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
       {/* <div className="col">
          <div className="mb-4">
          <div className="card h-100 bg-transparent border-danger rounded-lg m-1 mt-3" >
            <div className="row no-gutters">
              <div className="col-md-5">
                <img src={movie.Poster} alt={movie.Title} className="img-fluid m-image"/>
              </div>
              <div className="col-md-7 b-color ">
                <div className="card-body text-white">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Plot}</p>
                  <p className="card-text"><small className="text-muted">{movie.Year}</small></p>
                </div>
                <div className="card-footer">
                  <h4>{movie.Type}</h4>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div> */}
      <div className="col mb-4">
        <div className="card bg-transparent border-dange rounded-lg m-1 mt-3" >
          <img src={movie.Poster}  alt={movie.Title} className='img-fluid card-img-top'/>
          <div className="card-body text-white b-color">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Type}</p>
          </div>
          <div className="card-footer text-muted text-white b-color">
            <h5 className="text-center">{movie.Year}</h5>
          </div>
        </div>
        </div>
    </>
  )
}

export default Movies
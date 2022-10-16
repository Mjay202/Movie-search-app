import React from 'react'


  // get props.movie
  const Movies = ({movie, index}) => {

   
  return (
    <>
       {/* Each item displayed as card */}
      <div className="col mb-4">
        <div className="card bg-transparent border-dange rounded-lg m-1 mt-3" >
          <div className="card-header d-flex justify-content-center">
            <h2 className='badge badge-danger  text-center big-font'> {movie.Year}</h2>
          </div>
          <img src={movie.Poster}  alt={movie.Title} className='img-fluid card-img-top'/>
          
          <div className="card-body text-white b-color">
            <h5 className="card-title text-center movie-title">{movie.Title}</h5>
            <p className="card-text  text-center d-flex justify-content-center"> 
              <span className='badge badge-warning'>
              {movie.Type.toUpperCase()}
              </span>
            </p>
            <h5 className="text-center text-muted">Search result {index + 1}</h5>
          </div>
          
        </div>
        </div>
    </>
  )
}

export default Movies
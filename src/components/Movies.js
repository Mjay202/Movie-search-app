import React from 'react'

const Movies = (movie) => {

    const poster = movie.Poster === "N/A"? 
  return (
    <>
        <div className="card-group bg-dark">
            <div className="card">
            <div className="card-title">{movie.Title}</div>
            <img src="" className='img-fluid' alt="" />
            </div>  
        </div>
    
    </>
  )
}

export default Movies
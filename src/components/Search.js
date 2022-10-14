import React from 'react'
import { useState } from 'react'

const Search = ({search}) => {
  const [searchInput, setsearchInput] = useState("")
  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchInput);
    setsearchInput("")
  }
  return (
    
    <>

        <div className="container-fluid search mt-3">
            <input type="text" onChange={(e)=>{setsearchInput(e.target.value)}} className='form-control' placeholder='Search your favourite movies' name="searchItem" id="" />
            <div className="input-group-append">
                <button className='btn btn-danger' onClick={callSearchFunction}>Search</button>
            </div>
        </div>
    
    
    </>
  )
}

export default Search
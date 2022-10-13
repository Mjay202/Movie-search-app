import React from 'react'

const Search = () => {
  return (
    <>

        <div className="container-fluid search mt-3">
            <input type="text" className='form-control' placeholder='Search your favourite movies' name="searchItem" id="" />
            <div className="input-group-append">
                <button className='btn btn-danger '>Search</button>
            </div>
        </div>
    
    
    </>
  )
}

export default Search
import React from 'react'
import Logo from "./iconpng.png"

import "../App"


function SearchBar({
  handleSubmit,
  query,
  setQuery
}) {
  return (
    < div>
      <header className='flex bg-blue-300  h-20 justify-center items-center shadow-lg'>
        <img src={Logo} alt='' />
        <h1 className='text-3xl font-serif'>CODENT<span className='text-white'> - RECIPE</span></h1>
      </header >
      <img className='bg-bgImage h-40 w-screen bg-cover bg-no-repeat bg-center ' />
      <div className='flex justify-center '>
        <div className='h-24 w-[50rem] bg-blue-300  rounded-2xl border-white border-2 flex flex-col justify-around
         items-center absolute top-48 '>
          <form onSubmit={handleSubmit}>
            <input
              value={query}
              className='rounded-l-xl'
              placeholder="Search Recipe"
              name="query"
              onChange={(event) => setQuery(event.target.value)}
            />
            <input
              type="submit"
              className="brounded-r-xl"
              value="Search"
            />
          </form>

        </div >
      </div>
    </div>





  )
}

export default SearchBar
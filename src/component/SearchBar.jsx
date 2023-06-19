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
      <header className='flex bg-primary  h-20 justify-center items-center shadow-lg'>
        <img src={Logo} alt='' />
        <h1 className='text-3xl font-serif text-white text-center'> CODENT  RECIPE</h1>
      </header >
      <img className='bg-bgImage h-40 w-screen bg-cover bg-no-repeat bg-center'/>
      <div className='flex justify-center '>
        <div className='h-40 w-[20rem] bg-primary  rounded-2xl border-white border-2 flex flex-col justify-around
         items-center absolute top-32 '>
          <form onSubmit={handleSubmit}>
            <input
              value={query}
              className='rounded-l-xl  p-3 m-[1rem]'
              placeholder="Search Recipe"
              name="query"
              onChange={(event) => setQuery(event.target.value)}
            />
            <input
              type="submit"
              className="rounded-r-xl p-3 text-white cursor-pointer "
              value="Search"
              
            />
          </form>

        </div >
      </div>
    </div>





  )
}

export default SearchBar

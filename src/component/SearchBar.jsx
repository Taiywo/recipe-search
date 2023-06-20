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
      <header className='flex bg-primary h-20 justify-center flex-col w-screen items-center shadow-lg fixed z-10'>
        <div className='flex bg-primary h-20 justify-center  gap-2 items-center'>
          <img src={Logo} alt='' className='h-7' />
          <h1 className='text-3xl font-serif text-white text-center'> CODENT  RECIPE</h1>
        </div>
        <h1 className='font-medium text-xs pb-3 text-white tracking-widest'>. . . . find Inspiring Recipes with Ease!</h1>
      </header >
      <img className='bg-bgImage h-40 w-screen bg-cover bg-no-repeat bg-center' />
      <div className='flex justify-center '>
        <div className='h-24 w-[50%] bg-primary  rounded-2xl border-white border-2 flex flex-col justify-around
         absolute top-32 z-1 '>
          <form onSubmit={handleSubmit}>
            <input
              value={query}
              className='rounded-l-xl  p-2 w-[45%]'
              placeholder="Search Recipe"
              name="query"
              onChange={(event) => setQuery(event.target.value)}
            />
            <input
              type="submit"
              className="rounded-r-xl p-2 text-white cursor-pointer "
              value="Search"

            />
          </form>

        </div >
      </div>
    </div>





  )
}

export default SearchBar

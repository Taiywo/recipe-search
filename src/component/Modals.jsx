import { useState } from 'react';
import '../App'

function Modals({ strMeal, strCategory, strInstructions, containerImg, strMealThumb, recipeImg, strYoutube }) {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <div>
        <button onClick={openModal} className='font-sans font-semibold  h-8 w-full text-gray-600 bg-blue-300 border-none rounded-md' >View Instructions</button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex
         items-center justify-center text-center overflow-auto pt-40">
          <div className="bg-white p-10 rounded-lg max-w-[40rem]">
            <h2 className="font-bold text-2xl pb-3">{strMeal}</h2>
       
            <div className="">
              <h3 className='text-xl pb-2 text-sky-500'>Instructions:</h3>
              <p className='sm:text-xs xl:text-lg text-justify'>{strInstructions}</p>
            </div>
            <div className='m-auto pt-[1rem] pb-[1rem] w-[6rem]'>
              <img src={strMealThumb} alt="" className='rounded-full ' />
            </div>
            <div className="text-center  mb-[1rem] text-red-600">
              <a href={strYoutube} target="_blank" rel="noreferrer"
                className='text-l underline'>Watch Video</a>
            </div>
            <div className='flex justify-center'>
              <button onClick={closeModal} className='h-8 w-80 bg-blue-300 border-none font-serif  rounded-md'>Close</button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default Modals;





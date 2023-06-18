import { useState } from 'react';

function Modals({ strMeal, strInstructions, strMealThumb, strYoutube }) {


  // State to track if the modal is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <div>
        {/* Button to open the modal */}
        <button onClick={openModal} className='h-10 w-full text-white bg-secondary border-none rounded-md' >View Instructions</button>
      </div>
      {/* Modal content */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex
         items-center justify-center text-center overflow-auto pt-40">
          <div className="bg-white p-10 rounded-lg max-w-[40rem]">
            <h2 className="font-bold text-2xl  pb-3">{strMeal}</h2>
            <div className="">
              <h3 className='text-xl pb-2 text-secondary'>Instructions:</h3>
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
              {/* Button to close the modal */}
              <button onClick={closeModal} className='h-10 w-40 bg-secondary text-white border-none font-serif  rounded-md'>Close</button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default Modals;





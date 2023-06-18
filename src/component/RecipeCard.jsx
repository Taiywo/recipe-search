import React from 'react'
import "../App.css"
import styled from "styled-components";
import Modal from "./Modals";

const RecipeImg = styled.img`
width: 20rem;
margin: 0 auto;
border-radius: 1rem`



function RecipeCard({ recipee }) {
  const { idMeal,
    strMeal,
    strCategory,
    strMealThumb, strArea, strInstructions, strYoutube } = recipee

  return (
    <div key={idMeal} className='flex flex-col items-center mt-0 
    mx-auto pt-2 h-[31rem] w-[21rem] rounded-lg shadow-md bg-gray-100 ml-'>
      <img className='w-[20rem] rounded-lg' src={strMealThumb} alt="" srcset="" />
      <div className='w-[20rem] pt-4'>
        <p className='font-serif font-semibold pb-[1rem]' >{strMeal}</p>
        <div className="font-serif  flex justify-between pb-[2rem] font-light text-sm  text-gray-400">
          <p ><span className='font-bold'>Category:</span> {strCategory}</p>
          <p> <span className='font-bold'>Origin: </span>{strArea}</p>
        </div>
        <Modal  strMeal={strMeal} strCategory={strCategory} strInstructions={strInstructions} strMealThumb={strMealThumb} strYoutube={strYoutube}/>
      </div>
     
     
  
      

    </div>
  )

}


export default RecipeCard;

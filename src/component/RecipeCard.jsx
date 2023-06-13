import React from 'react'
import "../App.css"
import styled from "styled-components";
import Modal from "./Modal";



const RecipeImg = styled.img`
width: 20rem;
margin: 0 auto;
border-radius: 1rem`




function RecipeCard({ recipee }) {
  const { idMeal,
    strMeal,
    strCategory,
    strMealThumb, strArea, strSource,strInstructions } = recipee

  return (
    <div key={idMeal} className='recipe-card'>
      <RecipeImg src={strMealThumb} alt="" srcset=""/>
      <div className='text-container'>
        <p className='meal'>{strMeal}</p>
        <div>
          <p className='category'>{strCategory}</p>
          <p className='area'>{strArea}</p>
        </div>
        <a href={strSource} target="_blank" rel="noreferrer">View Recipe</a>
      </div>
        <Modal>
          <h1>{strInstructions}</h1>
        </Modal>
    
    </div>
  )

}


export default RecipeCard;

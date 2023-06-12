import "./App.css"
import RecipeCard from "./component/RecipeCard"
import React, { useState, useEffect } from 'react';
import SearchBar from './component/SearchBar';
import BasicModa from './component/Modal'



function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=bean`)
    const data = await response.json()
    setRecipes(data.meals)
    console.log(recipes)
  }
  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className="App">
      <SearchBar />
      <div className="recipe-container">
        {recipes.map(meals => <RecipeCard
          key={meals.idMeal}
          recipee={meals}>
            
          </RecipeCard >)}
      </div>
      
    </div>
  );
}

export default App;
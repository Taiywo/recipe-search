import "./App.css"
import RecipeCard from "./component/RecipeCard"
import React, { useState, useEffect } from 'react'
import SearchBar from './component/SearchBar'
import errorImg from './error-img.png'




function App() {

  // State variables to manage search query, recipes, and errors
  const [searchQuery, setSearchQuery] = useState('') // Search query input value
  const [recipes, setRecipes] = useState([])  // Array of recipes
  const [error, setError] = useState(null) // Error message


  // Function to fetch recipes from the API
  const getRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    );
    if (!response.ok) {
      setError('Failed to fetch recipes');// Throw an error if the response is not successful
      return;
    }
    const data = await response.json(); // Parsing the response as JSON

    setRecipes(data.meals);// Set the recipes state with the fetched data
    setError(null);// Reset the error state
  };


  // Fetch recipes on component mount
  useEffect(() => {
    getRecipes()
  }, [])


// Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    getRecipes();
  }
  return (
    <div className="App">
      <SearchBar handleSubmit={handleSubmit}
        query={searchQuery}
        setQuery={setSearchQuery} />
      <div className="flex flex-wrap gap-[2rem] gap-y-20 justify-evenly mx-auto my-0 pt-32 p-10">
         {/* Conditional rendering based on recipes state */}
        {!recipes ? (<div className="flex flex-col items-center"><img src={errorImg} alt="" className="w-[20rem]" />
          <h1 className="text-3xl font-bold">Recipie Not Found</h1>{error}</div>)
          : (recipes.map(meals => 
           // Recipe card component
          <RecipeCard
            key={meals.idMeal}
            recipee={meals}>
          </RecipeCard >))}
      </div>

    </div>
  );
}

export default App;
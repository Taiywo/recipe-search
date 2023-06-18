import "./App.css"
import RecipeCard from "./component/RecipeCard"
import React, { useState, useEffect } from 'react'
import SearchBar from './component/SearchBar'



function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)


  const getRecipes = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to fetch recipes')
      }

      setRecipes(data.meals)
      setError(null)
    }
    catch (error) {
      setError('Error fetching recipes:', error);

    }
  }

  useEffect(() => {
    getRecipes()
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    getRecipes();
  }
  return (
    <div className="App">
      <SearchBar handleSubmit={handleSubmit}
        query={searchQuery}
        setQuery={setSearchQuery} />
      <div className="flex flex-wrap gap-12 justify-center mx-auto my-0 pt-32">
        {!recipes ? (<div className="error-message">Not Found</div>)
         : (recipes.map(meals => <RecipeCard
          key={meals.idMeal}
          recipee={meals}>

        </RecipeCard >))}
      </div>

    </div>
  );
}

export default App;
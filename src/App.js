import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  const APP_ID = "cb68af90";
  const APP_KEY = "ed45747353f7d1bd0c1aa591acd5ef32";	
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("");

useEffect(()=>{
  getRecipes();
},[query])


const getRecipes=async()=>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
  };
  const updateSearch=(e)=>{
      setSearch(e.target.value);
  };
  const getSearch=(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={getSearch} className="search-form">  
          <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
            <button  className="search-button" type="submit">submit</button>
        </form>
        <div  className="recipes"> {recipes.map(recipe=>(
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          shareAs={recipe.recipe.shareAs}
          />
        ))}</div>
       
      </header>
    </div>
  );
}

export default App;

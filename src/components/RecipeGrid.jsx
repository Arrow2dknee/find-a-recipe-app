/**
 * a 'smart' component for generating all the recipes based on user input
 */
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./recipegrid.css";

const RecipeGrid = props => {
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "c8be8134";
  const APP_KEY = "4653112e4f76acc523f692418f0b7803";
  const getRequest = `https://api.edamam.com/search?q=${
    props.searchQuery
  }&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    fetchRecipes();
  }, [props.searchQuery]);

  const fetchRecipes = () => {
    fetch(getRequest, {})
      .then(response => {
        if (!response.ok) {
          throw new Error("Error in fetching data from api");
        }
        return response.json();
      })
      .then(data => {
        console.log("data fetch complete");
        console.log(data);
        setRecipes(data.hits);
      });
  };

  const welcomeMessage = "Hi! What would you like to cook today?";
  let content = null;

  if (recipes.length === 0) {
    content = (
      <div>
        <h1>{welcomeMessage}</h1>
      </div>
    );
  } else {
    content = (
      <div className="recipes">
        {recipes.map((recipe, indx) => (
          <Recipe key={indx} recipe={recipe} />
        ))}
      </div>
    );
  }

  return content;
};

export default RecipeGrid;

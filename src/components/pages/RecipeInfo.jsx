import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./recipeinfo.css";

function RecipeInfo({ match }) {
  const [recipe, setRecipe] = useState({
    ingredients: []
  });

  const APP_ID = "c8be8134";
  const APP_KEY = "4653112e4f76acc523f692418f0b7803";
  const getRequest = `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${
    match.params.id
  }&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // `http://www.edamam.com/ontologies/edamam.owl#recipe_8429a2414e9076b30a58430649c8fcd2&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    fetchRecipe();
    console.log(match);
    console.log(recipe);
  }, []);

  const fetchRecipe = () => {
    fetch(getRequest, {})
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong while fetching data.");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(data[0]);
        setRecipe(data[0]);
        console.log(recipe);
      });
  };

  return (
    <div>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <div className="my-recipe">
        <h1>{recipe.label}</h1>
        <p>Calorie count: {recipe.calories}</p>
        <ol>
          {recipe.ingredients.map((ingredient, indx) => (
            <li key={indx}>{ingredient.text}</li>
          ))}
        </ol>
        <img className="recipe-image" src={recipe.image} alt="food pictures" />
      </div>
    </div>
  );
}
export default RecipeInfo;

const linkStyle = {
  color: "#fff"
};

// http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408

// curl "https://api.edamam.com/search?
// q=chicken&
// app_id=${YOUR_APP_ID}&
// app_key=${YOUR_APP_KEY}&
// from=0&to=3&calories=591-722&health=alcohol-free"

// `https://api.edamam.com/search?r=${`http://www.edamam.com/ontologies/edamam.owl#recipe_8429a2414e9076b30a58430649c8fcd2`}&app_id=${APP_ID}&app_key=${APP_KEY}`;

// <ol>
//           {recipe[0].ingredients.map((ingredient, indx) => (
//             <li key={indx}>{ingredient.text}</li>
//           ))}
//         </ol>

// <ol>
//           {recipe[].forEach(ingredient => (
//             <li key={ingredient.weight}>{ingredient.text}</li>
//           ))}
//         </ol>

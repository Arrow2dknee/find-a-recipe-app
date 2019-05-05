import React from "react";
import { Link } from "react-router-dom";
import "./recipe.css";

const Recipe = props => {
  const recipeID = props.recipe.recipe.uri;
  const id = recipeID.slice(recipeID.indexOf("_") + 1);

  return (
    <div>
      <div className="recipe">
        <img
          src={props.recipe.recipe.image}
          className="image"
          alt="food pictures"
        />
        <p className="text">{props.recipe.recipe.label}</p>
        <p className="text">Calorie count: {props.recipe.recipe.calories}</p>

        <Link style={buttonStyle} to={`/${id}`}>
          Explore >>>
        </Link>
      </div>
    </div>
  );
};

export default Recipe;

const buttonStyle = {
  border: "1px solid red",
  padding: "5px 10px",
  margin: "10px 0 15px 0"
};

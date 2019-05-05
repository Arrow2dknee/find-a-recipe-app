/**
 * a 'stupid' component for generating form element
 */
import React from "react";
import "./userinput.css";

function UserInput(props) {
  return (
    <form className="search-form" onSubmit={props.submitHandler}>
      <input
        className="search-bar"
        type="text"
        placeholder="Enter your recipe here"
        value={props.input}
        onChange={props.inputHandler}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}
export default UserInput;

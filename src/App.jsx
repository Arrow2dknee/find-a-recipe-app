import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserInput from "./components/UserInput";
import RecipeGrid from "./components/RecipeGrid";
import Header from "./components/layout/Header";
import RecipeInfo from "./components/pages/RecipeInfo";
import "./App.css";

function App() {
  const [searchString, setSearchString] = useState("");
  const [queryString, setQuerystring] = useState("");

  const submitHandler = evt => {
    evt.preventDefault();
    console.log(`input data submitted`);
    if (!searchString) return;
    setQuerystring(searchString);
    setSearchString("");
  };

  const inputHandler = evt => {
    const input = evt.target.value;
    setSearchString(input);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <UserInput
                  submitHandler={submitHandler}
                  inputHandler={inputHandler}
                  input={searchString}
                />
                <RecipeGrid searchQuery={queryString} />
              </React.Fragment>
            )}
          />

          <Route path="/:id" component={RecipeInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

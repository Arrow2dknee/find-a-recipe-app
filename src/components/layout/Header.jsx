import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Recipe Application</h1>
    </header>
  );
}

const headerStyle = {
  //   background: "#FEE040",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;

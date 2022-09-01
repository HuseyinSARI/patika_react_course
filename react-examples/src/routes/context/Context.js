import React from "react";
import Button from "../../components/context/Button";
import Header from "../../components/context/Header";
import {ThemeProvider} from "../../context/ThemeContext";

function Context() {
  return (
    <div>
      <ThemeProvider>
        <Header/>
        <hr />
        <Button />
      </ThemeProvider>
    </div> 
  );
}

export default Context;

import React from "react";
import Container from "../../components/context/Container";
import {ThemeProvider} from "../../context/ThemeContext";


function Context() {
  return (
    <div>
      <ThemeProvider>
        <Container/>
      </ThemeProvider>
    </div> 
  );
}

export default Context;

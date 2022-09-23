import React, { useContext } from 'react'
import Button from "../../components/context/Button";
import Header from "../../components/context/Header";

import ThemeContext from '../../context/ThemeContext';

function Container() {

   const {theme} = useContext(ThemeContext);
    
  return (
    <div className={theme}>
        <Header/>
        <hr />
        <Button />
    </div>
  )
}

export default Container
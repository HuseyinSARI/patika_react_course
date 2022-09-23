import React, { useEffect , useState } from 'react'
import style from "./style.module.css";
import {init , send ,subscribe} from "../../socketApi";

function Palette() {
    const [color, setColor] = useState('#000');
    const [activeColor, setActiveColor] = useState('#282c34')

    useEffect(()=>{
        init();
        subscribe((color)=>{
            setActiveColor(color);
        });
    },[])
  return (
    <div className={style.container} style={{backgroundColor : activeColor}}>
        Bu örnekte backend yardımıyla bir client a yapılan değişikliği diğer client larda da anlık olarak uyguladık. Clientları backend üzerinden haberleştirdik.
        <br />
        <br />
        <input type="color" value={activeColor} onChange={(e)=> setColor(e.target.value) } />
        <button className={style.btn} onClick={()=> send(color)} >Click</button>
        <h1>active color : {activeColor}</h1>
    </div>
  )
}

export default Palette
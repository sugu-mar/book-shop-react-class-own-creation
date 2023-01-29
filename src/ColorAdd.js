import React, { useState } from 'react';
import { ColorBox } from "./ColorBox";

export function ColorAdd() {

  const [color, setColor] = useState("blue");

  const [colorList, setColorList] = useState(["red", "yellow", "green"]);

  // const colorList = ["red", "yellow", "blue", "green"];
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };

  return (
    <div className='add_color'> <div>
      <input
        onChange={(event) => setColor(event.target.value)}
        type="text"
        style={styles}
        value={color} />
      <button onClick={() => setColorList([...colorList, color])}>add color</button>
    </div>
      {colorList.map((clr,index) => (<ColorBox color={clr} key ={index} />))}

    </div>
  );
}

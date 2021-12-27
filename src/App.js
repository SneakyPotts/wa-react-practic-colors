import React, { useState } from "react";
import './App.css';
import Title from "./Title";
import ListItems from "./ListItems";

function App() {
  const colors = [
  { hex:'#9253a1', rgb:'rgb(146, 83, 161)' },
  { hex: '#f063a4', rgb: 'rgb(240, 99, 164)' },
  { hex: '#2dc5f4', rgb: 'rgb(45, 197, 244)' },
  { hex: '#fcee21', rgb: 'rgb(252, 238, 33)' },
  { hex: '#f16164', rgb: 'rgb(241, 97, 100)' },
  { hex: '#70327e', rgb: 'rgb(112, 50, 126)' },
  { hex: '#a42953', rgb: 'rgb(164, 41, 99)' },
  { hex: '#0b6a88', rgb: 'rgb(11, 106, 136)' },
  { hex: '#f89e4f', rgb: 'rgb(248, 158, 79)' },
  { hex: '#ec015a', rgb: 'rgb(236, 1, 90)' }
];

  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [colorValue, setColorValue] = useState('');

  const setBackground = (color) => {
    return () => {
      setBackgroundColor(color);
    }
  }
  const setBufferValue = (text) => {
    return () => {
      setColorValue(text);
      navigator.clipboard.writeText(text);
    }
  }


  return (
    <div className="wrapper" style={{backgroundColor: backgroundColor}}>
      <Title colorValue={colorValue} />

      <ListItems colors={colors} setBackground={setBackground} setBufferValue={setBufferValue} />
    </div>
  );
}

export default App;

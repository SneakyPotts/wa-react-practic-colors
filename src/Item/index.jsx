import React from 'react';

const Item = ({color ,setBackground, setBufferValue}) => {
  return (
    <li className='color-item'>
      <div
        className="color-box"
        onClick={setBackground(color.hex)}
        style={{backgroundColor:color.hex}}
      > </div>
      <p className="hex-value" onClick={setBufferValue(color.hex)}>{color.hex}</p>
      <p className="rgb-value" onClick={setBufferValue(color.rgb)}>{color.rgb}</p>
    </li>
  );
};

export default Item;
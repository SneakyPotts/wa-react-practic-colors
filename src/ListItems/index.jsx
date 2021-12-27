import React from 'react';
import Item from "../Item";

const ListItems = ({colors, setBackground, setBufferValue}) => {
  return (
    <ul className='color-list'>
      {colors.map(color =>
        <Item color={color} setBackground={setBackground} setBufferValue={setBufferValue}/>
      )}
    </ul>
  );
};

export default ListItems;
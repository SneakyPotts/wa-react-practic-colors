import React from 'react';

const Title = ({colorValue}) => {
  return (
    <React.Fragment>
      {colorValue && <h1 className='title'>copied: {colorValue}</h1>}
    </React.Fragment>
  );
};

export default Title;
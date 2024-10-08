import React from 'react';

export default props => {
  return (
    <>
      <button onClick={props.setDec}>-</button>
      <button onClick={props.setInc}>+</button>
    </>
  );
}
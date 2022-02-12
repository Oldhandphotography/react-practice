import React from 'react';

function Memo({name}) {
    console.log('rendering memo coponent')
  return <div>{name}</div>;
}

export default React.memo(Memo);
// this is higher order component which is capable of rendering fast if state is constant 

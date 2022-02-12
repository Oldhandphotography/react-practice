import React from 'react';
// function recieves 2 parameter props,ref  as component.
const FRinput =React.forwardRef((props,ref)=>{
    return (<div>
        {/* this ref take value from ref defined in parent input component  */}
        <input type="text" ref={ref}></input>
    </div>)
})

// function fordwardrefsinput() {
//   return <div>
//       <input type="text"/>
//   </div>;
// }

export default FRinput;

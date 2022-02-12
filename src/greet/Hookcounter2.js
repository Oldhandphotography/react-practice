import React,{useState} from 'react';

function Hookcounter2() {
    const initialCount = 0;
    const [count,setCount] = useState(initialCount)
    const increamentFive = () =>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount +1)
        }
    }
  return <div>
      Count:{count}
      <button onClick = {()=>setCount(initialCount)}>Reset</button>
      <button onClick = {()=>setCount(prevCount => prevCount +1)}>incrementy</button>
      <button onClick = {()=>setCount(prevCount => prevCount -1)}>decrement</button>
      <button onClick={increamentFive}>increment5</button>
  </div>;
}

export default Hookcounter2;

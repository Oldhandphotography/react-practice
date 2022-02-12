import React,{usestate,useEffort} from 'react';
// use state hook is used for functional component 
function Hookcounter() {
//    count variable hai aur setCount method hai
    const[count,setCount] = usestate(0)
    useEffect(()=>{
      // useEffect runs after every render
      document.title=`you clicked ${count} times`
    })
  return <div> 
      <button onClick={() =>setCount(count+1)}>Count {count} times</button>
  </div>;
}

export default Hookcounter;


// only call loops at top level
// .dont call hooks inside loops,conditions, or nested functions.

// only call hooks from react functions
// .call them from within react functional components and not just any regular javascript funtion.
import React ,{useState} from 'react'

function Hookcounter4() {
    const[items,setItems]=useState([])
    const addItems =()=>{
        setItems([ ...items ,
             {id: items.length,value: Math.floor(Math.random()*10)+1}
            ])
    }
  return (
    <div>
        <button onClick={addItems}>Add a Number</button>
        <ul>
            {items.map(item => ( 
                <li key={item.id}>{item.value}</li>)
            )}
        </ul>
    </div>
  )
}

export default Hookcounter4



// ##########################useState###############################
// . the useState hook is a react hook that lets you manage the state of a component.
//. in classes , the state is always an object.
//. with useState the state doesnt have to be an object
//. useState returns an array with two elements
//. the first element is the current state ansd second is a function to update the state.
//. new state value depends on the previous state value.you can pass a function to the setter function.
//. while dealing with objects or arrays, always use the spread operator to create a copy of the array or object. and to spread your state variableand then call the setter function. 
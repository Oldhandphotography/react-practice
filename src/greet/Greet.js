import React from 'react'

// function Greet() {
//     return (
//         <h1> hello souvik bhardwaj</h1>
//     );
// }

//using arrow operator
//this is name export and if we dont export it by its Greet.js name it will through error.

// named export const Greet = () => <h1>hello bhadwee thoda padhle
    // /</h1><h2>paper waper nhi are kya tere sale kam reels bheje ker insta per</h2>
// {/* </h1> */}

 const Greet = (props) =>{ 
    console.log(props)
    return (
        <div>
            <h1>hello{props.name} as {props.catagory}</h1>
            {props.children}
        </div>
    )
} 

export default Greet;

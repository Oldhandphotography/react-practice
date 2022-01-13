import React from 'react'

function functionclick() {
    function clickHandler(){
        console.log(" function button clicked");  
    }
    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )   
}

export default functionclick

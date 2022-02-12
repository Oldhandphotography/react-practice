import React from 'react'

function childComponent(props) {
    return (
        <div>
            <button onClick={() => props.Greethandler('child')}>greet parent</button>
            <p>child component se parent ko call kerre hain jaha  per jahan greet parent call hora hai aur fir consytructor se value jake alert main show hore hai. </p>
        </div>
    )
}

export default childComponent

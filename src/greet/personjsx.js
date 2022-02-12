import React from 'react'

function Persons({prsn}) {
    return (
        <div>
             <h2>i am {prsn.name} and i am {prsn.age} yeras old and my skill is {prsn.skill}</h2>
        </div>
    )
}

export default Persons

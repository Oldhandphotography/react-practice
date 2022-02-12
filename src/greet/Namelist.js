import React from 'react'
import Personjsx from "./personjsx"
function Namelist() {
    const persons = [
        
                    {name:'bruce',
                    id:1,
                    age:30,
                    skill:'React-js'}   
                    
                    ,{
                    name:'clark',
                    id:2,
                    age:25,
                    skill:'angular'},
                    
                    {
                    name:'diana',
                    id:3,
                    age:28,
                    skill:'advance css'}
                ]
    const personlist = persons.map(prsn => <Personjsx key={prsn.id} person={prsn.name} /> )                
    return (
        <div>
            {personlist}
        </div>
    )
}

export default Namelist

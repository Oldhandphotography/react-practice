import React from 'react'

function Hello() {
    // return (
    //     <div>
    //         <h1>hello wishwas</h1>
    //     </div>
    // )

    // using this we can show on main page without using jsx
    return React.createElement(
        'div',
        {id:'hello',classname:'dummyclass'},
    React.createElement('h1',null,'hellow wishwas')
    )}

export default Hello

// class-classname
// for-htmlFor
// onclick-onClick
// tabindex-tabIndex
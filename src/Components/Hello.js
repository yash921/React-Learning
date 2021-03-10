import React from 'react'

const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}
//     return React.createElement('div', {id: 'hello', className: 'dummyClass'}, 
//             React.createElement('h1', null, 'Hello Yash Dixit!!'))
// }

export default Hello

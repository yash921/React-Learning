import React from 'react'

const ChildComponent = (props) => {
    // const { greetHandler } = props
    return (
        <div>
            <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent

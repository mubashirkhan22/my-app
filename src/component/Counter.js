import React, { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0)

    const handelOnClick = (value) => {
        if (value === 'increment') {
            setCounter(counter + 1);
        } else if (counter > 0) {
            setCounter(counter - 1);
        } else {
            setCounter(0)
        }
    }

    // const handelOnDecrement = () => {
    //     console.log('decreses');
    //     setCounter (counter - 1);
    // }

    return (
        <div>
            {/* counter{counter}<br /> */}
            <button onClick={() => handelOnClick('increment')}>Increment</button>
            <button onClick={() => handelOnClick('decrement')}>Decrement</button>
            <div>{counter}</div>
        </div>
    )
}

export default Counter

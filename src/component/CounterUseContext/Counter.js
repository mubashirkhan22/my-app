import React, { useState,createContext } from 'react'
import Buttons from './Buttons'
import Display from './Display'

export const countContext = createContext(null)
function Counter() {

    const [count, setCount] = useState(0)


    return (
        <countContext.Provider value={{count,setCount}}>
            <Display />
            <br/>
            <Buttons />
        </countContext.Provider>
    )
}

export default Counter;

import React,{useContext} from 'react'
import { countContext} from './Counter'
function Buttons() {
    const {count,setCount}=useContext(countContext)
    const handleOnIncrement = () => {
        setCount(count + 1)
    }
    const handleOnDecrement = () => {
        if (count > 0)
            setCount(count - 1)
    }
  return (
    <div>
        <button onClick={handleOnIncrement}>Increment</button>
 
    <button onClick={handleOnDecrement}>Decrement</button>
    </div>
  )
}

export default Buttons

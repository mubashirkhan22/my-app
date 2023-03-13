import React,{useContext} from 'react'
import {countContext} from './Counter'
function Display() {
    const {count} =useContext(countContext)
  return (
    <div>
                <p>{count}</p>
    </div>
  )
}

export default Display

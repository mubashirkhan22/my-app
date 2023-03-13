import React, { useEffect, useState } from 'react'

function Color() {

    const [display, setDisplay] = useState([])
    useEffect(()=>{
        setDisplay([{ color: 'red', value: '#f00' },
        { color: 'blue', value: '#00f' },
        { color: 'green', value: '#0f0' }])
    },[])

    return (
        <div>
            {
                display.map((item) => {
                    return (
                        <p style={{color:item.value}}>{`${item.color} ${item.value}`}</p>
                    )
                })
            }
        </div>
    )
}

export default Color;

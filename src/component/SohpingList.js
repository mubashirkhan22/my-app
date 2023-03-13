import React from 'react'

const products = [
    { title: 'cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 }
];

function SohpingList() {
    const listItems = products.map((products) => {
        return <li>{products.title}</li>
    })
    return <ul>{listItems}</ul>
}

export default SohpingList

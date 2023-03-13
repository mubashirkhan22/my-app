import axios from 'axios'
import React, { useEffect, useState } from 'react'


function TableApi() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/users')
            .then((response) => {
                console.log(response.data);
                setData(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const keys = [];
    for (const key in data[0]){
        keys.push(key)
    }

    return (
        <div>
            <table>
                <tr>
                    {keys.map((item) => {
                        return (
                            <th>{item}</th>
                        )
                    })}
                    {/* <th>email</th>
                    <th>gender</th>
                    <th>id</th>
                    <th>name</th>
                    <th>status</th> */}
                </tr>
                {
                    data.map((item) => {
                        return (
                            <tr>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default TableApi

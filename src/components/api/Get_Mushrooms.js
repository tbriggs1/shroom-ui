import React, {useEffect, useState } from 'react'
import axios from 'axios'

const Get_Mushrooms = () => {

    const [mushrooms, setMushrooms] = useState([]); 

    const url = 'http://46.105.174.113:8000/mushrooms/';

    useEffect(() => {
        axios.get(url).then( res => {
            console.log(res.data)
            setMushrooms(res.data);
        })
        .catch(error => {
            console.log("Error fetcing data", error)
        });
    }, []);

    return (
        <div>
            <h1>Mushrooms</h1>
            <ul>
                {mushrooms.map(mushroom => (
                    <li key={mushroom.id}>{mushroom.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Get_Mushrooms;
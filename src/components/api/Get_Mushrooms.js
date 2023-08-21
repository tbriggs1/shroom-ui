import React, {useEffect, useState } from 'react'
import axios from 'axios'

const Get_Mushrooms = () => {

    const url = 'http://localhost:8000/mushrooms/';
    useEffect(() => {
        axios.get(url).then( res => {
            console.log(res.data)
            const data = res.data;
        })
    })
}

export default Get_Mushrooms;
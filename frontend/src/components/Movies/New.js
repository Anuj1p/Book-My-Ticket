import React, { useEffect, useState } from 'react'
import axios from 'axios'

const New = () => {
    const [Data, setData] = useState([]);

    const getPosts = () =>{
        axios.get('https://sharinghelps.herokuapp.com/app/feed')
        // .then(response => await response.data.json)
        .then(response => setData(response.data))
    }

    useEffect(()=>{
        getPosts();
    }, [])
    console.log({Data});
    return (
        <div>
            
        </div>
    )
}

export default New;

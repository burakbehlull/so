import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Posts(){
    const [data, setData] = useState([])

    useEffect(() => {
        const dataFunc = async ()=>{
            const getData = await axios.get('http://localhost:80/posts')
            setData(getData.data)
        }
        dataFunc()
    })
    
    return(
        <section className='posts'>
            <h1>Posts</h1>
            <ul>
                {data.map((item, i) => <>
                    <li key={i}>
                        <span> {item.date} </span> 
                        <a href={`${item.url}`}> {item.text} </a>
                    </li>
                </>)}
            </ul>
        </section>
    )
}

export default Posts
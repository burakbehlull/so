import React from 'react'
function Posts(){
    const arr = [
        {
        header: 'Atatürk',
        tarih:'Sonsuz...'
        },
        {
            header: 'Atilla Han',
            tarih: 'Sonsuz...'
        }
    ]
    return(
        <section className='posts'>
            <h1>Posts</h1>

            <ul>
                {arr.map((item, i) => <>
                    <li>
                        <span> {item.tarih} </span> 
                        <a href="#"> {item.header} </a>
                    </li>
                </>)}
            </ul>
        </section>
    )
}

export default Posts
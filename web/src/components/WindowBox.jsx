import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Posts from '../components/Posts'
function WindowBox(){
    return(
        <div className='windowBox'>
            <Navbar />
            <main>
                <Header />
                <About />
                <Posts />
            </main>
            
        </div>
    )
}

export default WindowBox
import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
function WindowBox(){
    return(
        <div className='windowBox'>
            <Navbar />
            <main>
                <Header />
                <About />
            </main>
            
        </div>
    )
}

export default WindowBox
import React from 'react'
import Londonimg from '../images/London.JPG';
import Nycimg from '../images/Newyork.JPG'
import Santoriimg from '../images/Santori.JPG'
import Romeimg from '../images/Rome.JPG'
import './destination.css';



function Destination() {
    return (
        <section className='destination-content' id='destination'>

            <article className="destination-subtitle">
                <h1>Every City is Beautiful</h1>
            </article>

            <aside className="destination-title">
                <p>Select A City to Begin Exploring its available Properties!</p>
                <button>Explore</button>
            </aside>
            <main className='destination-images'>
                <img src={Londonimg} alt='city'></img>
                <img src={Nycimg} alt='city'></img>
                <img src={Romeimg} alt='city'></img>

                <img src={Santoriimg} alt='city'></img>

            </main>
        </section>
    )
}
export default Destination;
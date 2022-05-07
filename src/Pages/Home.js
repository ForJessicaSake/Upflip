import React from 'react';
import Heroimg from '../images/heroimage.png';
import  './home.css'
function Hero() {
    return (
        <section className='hero'id='home'>
        <article className='hero-text'>
            <h1>A Better Way to Buy and Sell a Business</h1>
            <p>Upflip   an online platform that gives you all the best tools to buy and sell a business.</p>
            <button>Browse Collections</button>
        </article>
        <div className="hero-image">
            <img src={Heroimg} alt='house'></img>
        </div>
        </section>
    )
}

export default Hero;
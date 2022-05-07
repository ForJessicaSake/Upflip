import React from 'react';
import './services.css';

function Services(props) {
    return (
        <section className='our-services' id='services'>

            <article className="our-services-subtitle">
                <h1>Our Services</h1>
                <p>When The Dreams Come True, We Are Happy To Help in every step of the way!</p>
            </article>
            <div className='box'>
                <div className='service-box'>
                    <h1><i class=" fa-solid fa-square-check"></i></h1>
                    <h2>The Best Features</h2>
                    <p>We use the latest and best technology in order to make your experience on our website easy and pleasureable. Street views, floors, plans, stores, schools and police stations that are nearby the property</p>
                </div>
                <div className='service-box'>
                    <h1><i class=" fa-solid fa-square-check"></i></h1>
                    <h2>Ease of Use</h2>
                    <p>Our goal is to make your next commercial real estate investment easy, fast and pleaureable as possible. That is why we designed and developed thois website with investors like you in mind</p>
                </div>
                <div className='service-box'>
                    <h1><i class=" fa-solid fa-square-check"></i></h1>
                    <h2>Thousand of Listings</h2>
                    <p>From family properties to golf courses, we have everything you need to find your next investment. Want to post your own listing? We've got you covered and we make sure it's an easy process. </p>
                </div>
            </div>
        </section>
    )
}
export default Services;
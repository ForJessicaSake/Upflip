import React from "react";
import './furniture.css';
import kitchen from '../images/kitchen.JPG';
import bathroom from'../images/bathroom.JPG';
import house from '../images/house.JPG';
import  livingroom from '../images/livingroom.JPG';
import bedroom from '../images/bedroom.JPG';



function Furniture() {
    return (
        <section className="furniture-wrapper" id="furniture">
            <article className='furniture-content'>
                <h1>The Best Offer This Month</h1>
                <p>Check out this special offers for our beloved customers. Don't miss it!</p>
                <button>Discover More</button>

            </article>
            <aside className="furniture-images">
                <div className="main-image">
                    <img src={bedroom} alt='bedroom'></img>
                </div>
                <div className="sub-images">
                    <img src={house} alt='house' className="bigimg"></img>
                    <img src={kitchen} alt='kitchen' className="smallimg"></img>
                    <img src={livingroom} alt='livingroom' className="bigimg"></img>
                    <img src={bathroom} alt='bathroom' className="smallimg"></img>




                </div>
            </aside>

        </section>

    )
}

export default Furniture;
import React from "react";
import './footer.css';

function Footer() {
    return (

        <section className="footer-wrapper" id="footer">
            <h1><span>Up</span>flip</h1>

            <div className="footer-text">
                <div>
                    <h1>Main Menu</h1>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#destination">Destination</a></li>
                        <li><a href="#furniture">Furniture</a></li>
                        <li><a href="#footer">Contact</a></li>

                    </ul>
                  
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                </div>
                <div>
                    <h1>Search</h1>
                    <p>Agencies</p>
                    <p>Agent</p>
                    <p>Lawyers</p>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <p>Contact</p>
                    <p>Mail to jessicajoseph2019@yahoo.com</p>
                    <p>Lagos, Nigeria</p>
                    <div className='icons'>
                        <a href="https://github.com/ForJessicaSake "><i class="fa-brands fa-github"></i></a>
                        <a href="https://twitter.com/forJessica_sake"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/jessica-joseph-79629a218/ "><i
                            class="fa-brands fa-linkedin"></i></a>
                    </div>
                    
                </div>
            </div>
            
          
        </section>

    )
}

export default Footer;
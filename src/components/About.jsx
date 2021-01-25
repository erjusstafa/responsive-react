import React from 'react';
import './About.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css'


const  About = () => {


    return (
        <div className="about" id="about">
            <div data-aos="fade-down"  className="title">
            <p>What we offer</p>
            </div>
            <div className="card_wrapp">

                <div data-aos="fade-right" className="card" >
                    <div className="card_image">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.ssBY3cqLl4BCCa-DRb7JlAHaE8&pid=Api&P=0&w=279&h=187" alt="" />
                    </div>

                    <div className="details">
                        <h2>SEO & SMM</h2>
                    </div>
                    <p>
                        SEO is the process of making your website simpler for search engines to find and index it,
                        which in turn makes it easier for people to find you when they conduct relevant searches.
                        We help your business to grow through Search Engine Optimization.
                    </p>
                </div>



                <div  data-aos="fade-up"  className="card">
                    <div className="card_image">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.2ZY6_dTCqtDRtH4z9xpqcwHaEK&pid=Api&P=0&w=288&h=163" alt="" />
                    </div>
                    <div className="details">
                        <h2>Web & App Design</h2>
                    </div>
                    <p>
                    Your website is the showcase of your identity and your services to the digital world.
                     A professional corporate website is your tool for positioning, relationship and sale
                      of your services to your customers.
                    We take care of its launch, positioning, and maintenance.
                    </p>
                </div>



                <div  data-aos="fade-left"  className="card">
                    <div className="card_image">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.4-pxzCwZsq4tBg3FHRo8vgHaDy&pid=Api&P=0&w=373&h=191" alt="" />
                    </div>
                    <div className="details">
                        <h2>Web & App Development</h2>
                    </div>
                    <p>
                    Are you looking for a brand-new focused website, responsive and   
                    optimized for pc and mobile users, which incorporates a stunning 
                    web design guaranteed to boost the growth of your company?
                     Well, you came to the right place.      
                   </p>
                </div>
            </div>


        </div>
    )
}

export default About

import React from 'react';
import './Contact.css';
import { FaDribbble, FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im'


const Contact = () => {
    return (
        <div className="contact" id="contact">


            <div className="position_contact">
                <div data-aos="fade-down" className="title_contact">
                    <p>Contact Us</p>
                </div>

                <div className="media">

                    <div data-aos="fade-right" className="contact_tel">
                        <div><MdCall />   +35569 740 34 80</div>
                        <div><AiOutlineMail />  erjus.stafa@gmail.com</div>
                        <div><ImLocation />  Durres, Albania</div>
                    </div>

                    <div className="social">
                        <ul data-aos="fade-left" >
                            <li><a href="https://www.facebook.com/"><FiFacebook /></a></li>
                            <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                            <li><a href="https://twitter.com/"><FiTwitter /></a></li>
                            <li><a className="drib" href="http://dribble.com/"><FaDribbble /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="line">
                <p>Designed by <span style={{ color: 'rgb(253, 253, 254)', fontSize: '30px' }}>Erjus Stafa </span> | Powered by React Js</p>

                </div>
            </div>
        </div>
    )
}

export default Contact

import React from 'react';
import './Nav.css';
import { Button } from '@material-ui/core';
import { IoLogoXing } from 'react-icons/io';
import { HashLink as Link } from "react-router-hash-link";
import {AppBar , Toolbar} from '@material-ui/core';

const Nav = () => {


  
    return (
        <>

            {/* Nav */}
            <AppBar data-aos="fade" >
                <Toolbar  className="nav_bar">
                    <div data-aos="fade-down-right" className="logo_airbnb">
                        <IoLogoXing className="air_bnb" /><p className="dribble">Dribble</p>
                    </div >
                    <div data-aos="fade-down" className="list_one">
                        <li><Link className="link" to="#">Home</Link></li>
                        <li><Link className="link" to="#about">About</Link></li>
                        <li><Link className="link" to="#blog">Blog</Link></li>
                        <li><Link className="link" to="#contact">Contact Us</Link></li>
                    </div>
                    <div data-aos="fade-down-left" className="hire_me">
                        <Button >Try for free</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav

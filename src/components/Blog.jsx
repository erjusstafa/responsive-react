import React from 'react';
import './Blog.css';
import { RiComputerLine } from 'react-icons/ri';
import { FaGreaterThan } from 'react-icons/fa';
import { Button } from '@material-ui/core'

function Blog() {
    return (
        <div className="blog" id="blog">
            <div className="blog_container">
            <div  data-aos="fade-right" className="img" ></div>

                {/* <img  data-aos="fade-right" src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/09/web-dev-11.png" alt="" /> */}
                <div data-aos="fade-left" className="prgh">
                    <h2>WEBSITE DEVELOPMENT</h2>
                    <h1>Elegant Job Recruiters Website Architecture</h1>
                    <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                    Donec rutrum congue leo eget malesuada.
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    Curabitur non nulla sit amet nisl tempus
                    </p>
                    <div className="computer"><RiComputerLine /><span style={{ color: 'rgb(63, 62, 63)', margin: '0 40px', fontSize: '20px' }}>LIVE WEBSITE</span></div>

                    <div className="btn_blog">
                        <Button>VIEW FULL PROJECT<span style={{ fontSize: '9px', marginLeft: '20px' }}><FaGreaterThan /><FaGreaterThan /></span></Button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Blog

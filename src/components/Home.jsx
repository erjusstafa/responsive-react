import React from 'react';
import './Home.css';
import { Button } from '@material-ui/core';



const  Home = () => {
       
    const sms = ( e) => {

        e.preventDefault();
        alert('Welcome in my page')
    }

    return (
        <div className="home" id ="#" >

         


            {/* Home */}
            <div className="column">
                <div data-aos="fade-right" className="desc">
                    <h1>We Are <span style={{color:'rgb(69, 95, 240)'}}>Digital</span> Agency</h1> <br />
                    <p>Your business is important to you. Our business  is keeping yours healthy, efficient and growing.
                     </p><br />
                    <p>We are the best in Town</p> <br />
                    <Button  onClick={sms} variant="contained" color="primary">Learn more</Button>
                </div>
                <div className="images">
                    <img data-aos="fade-left"   src="https://www.immortal-tech.net/wp-content/uploads/2018/11/main.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home

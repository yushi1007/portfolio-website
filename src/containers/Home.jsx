import React from 'react';
import { Link } from "react-scroll"
import Typical from 'react-typical'
import Fade from 'react-reveal/Fade';
import Arrow from '../svg/arrow.svg';

const Home = () => {
    return(
        <div id="home" className="homepage">
            <section>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section>
            <div className="introduction">
                <Fade delay={200} bottom cascade>
                    <div className="myname">
                        <h1>Hello world 👋, I'm Yu Shi</h1>
                    </div>
                </Fade>
                <Fade delay={400} bottom >
                    <div className="mytitle">
                        <p>I'm a{' '}
                            <Typical 
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    "Full Stack Web Developer 💻",
                                    1000,
                                    "Photograher 📸",
                                    1000,
                                    "Designer 💅",
                                    1000,
                                    "Ready To Work With You 💼",
                                    1000
                                ]}
                            />
                        </p>    
                    </div>
                </Fade>
                <Fade delay={600} bottom>
                    <Link to="about" smooth={true} duration={500}><img className="arrow" src={Arrow} alt="scroll down"/></Link>
                </Fade>
            </div>
        </div>
    )
}

export default Home;

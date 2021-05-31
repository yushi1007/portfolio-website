import React from 'react';
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';
import Arrow from '../svg/arrow.svg';
import TypeWriter from '../components/TypeWriter';

const Home = ({ toggle }) => {
    return(
        <div id="home" className="homepage">
            <section className={toggle ? "homebg darkmode" : ""}>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section>
            <div className={toggle ? "introduction darkmode" : "introduction"}>
                <Fade delay={400} bottom cascade>
                    <div className="myname">
                        <h1>Hello world 👋!</h1>
                        <h1>I'm Yu Shi.</h1>
                    </div>
                </Fade>
                <Fade delay={600} bottom>
                    <div className="mytitle">
                        <p><TypeWriter /> </p> 
                    </div>
                </Fade>
                <Fade delay={1300} bottom>
                    <Link to="about" smooth={true} duration={500}><img className="arrow" src={Arrow} alt="scroll down"/></Link>
                </Fade>
            </div>
            <ul class="circle">
                <li className="blue"></li>
                <li className="red"></li>
                <li className="green"></li>
                <li className="yellow"></li>
                <li className="blue"></li>
                <li className="red"></li>
                <li className="green"></li>
                <li className="yellow"></li>
                <li className="blue"></li>
                <li className="red"></li>
            </ul>
        </div>
    )
}

export default Home;

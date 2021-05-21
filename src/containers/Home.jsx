import React from 'react';
import Fade from 'react-reveal/Fade';
import Typical from 'react-typical'

function Home () {
    return(
        <div className="homepage">
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
                <Fade></Fade>
            </div>
        </div>
    )
}

export default Home;

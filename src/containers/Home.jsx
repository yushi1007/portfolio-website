import React from 'react';
import Fade from 'react-reveal/Fade';


function Home () {
    return(
        <div className="homepage">
            <Fade delay={200} bottom cascade>
                <div className="myname">
                    <h1>YU SHI</h1>
                </div>
            </Fade>
            <Fade delay={400} bottom >
                <div className="mytitle">
                    <h2>SOFTWARE ENGINEER</h2>
                </div>
            </Fade>
        </div>
    )
}

export default Home;

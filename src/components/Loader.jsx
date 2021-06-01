import React from 'react'
import { BoltLoader } from "react-awesome-loaders";
import { XlviLoader } from "react-awesome-loaders";

const Loader = () => {

    return (
    <div id="loading">
        <div className="desktop-loader">
            <BoltLoader
                className={"loaderbolt"}
                boltColor={"#ffe100"}
                backgroundBlurColor={"#E0E7FF"}
            />
        </div>
        <div className="mobile-loader">
            <XlviLoader
                boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
                desktopSize={"128px"}
                mobileSize={"100px"}
            />
        </div>
        <h1>Loading... ⚡</h1>
    </div>
  )
}

export default Loader;
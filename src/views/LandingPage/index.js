// Library imports
import React from "react"

// Custom imports
import Contributors from 'containers/Contributors'
import data from 'data/profile.json'
import imagePath from 'assets/img/wallpaper.png'
import Billboard from "containers/Billboard/billboard"

const LandingPage = () => {

    // TODO: Improve this functionality
    const image = new Image()
    image.src = imagePath

        return (
            <div role="main">
            <Billboard imageSrc={image.src}/>
            <Contributors data={data}/>
            </div>
        )
} 


export default LandingPage

// Library imports
import React, {useState, useCallback} from "react"

// Custom imports
import Contributors from 'containers/Contributors'
import data from 'data/profile.json'
import imagePath from 'assets/img/wallpaper.png'
import Billboard from "containers/Billboard/billboard"

const LandingPage = () => {

    const [scrollAmount, setScrollAmount] = useState(null)

    // TODO: Improve this functionality
    const image = new Image()
    image.src = imagePath

    // function to call when scroll changes and update scroll amount
    const handleScrollAmountChange = useCallback(event => {

        const winScrollAmount =
            document.body.scrollTop || document.documentElement.scrollTop
            setScrollAmount(winScrollAmount)

    }, [])

    // on every scroll, down or up, change the scrollAmount value
    window.addEventListener('scroll', handleScrollAmountChange)
 
        return (
            <div role="main">
            <Billboard imageSrc={image.src}/>
            <Contributors data={data}/>
            </div>
        )
} 


export default LandingPage

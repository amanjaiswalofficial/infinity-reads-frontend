// Library imports
import React, {useState, useEffect, useCallback} from "react"

// Custom imports
import NavBar from 'components/NavBar/navbar'
import Poster from 'components/Poster/poster'
import Contributors from 'containers/Contributors'
import data from 'data/profile.json'
import imagePath from 'assets/img/wallpaper.png'


const LandingPage = () => {

    const [scrollAmount, setScrollAmount] = useState(0)

    const image = new Image()
    image.src = imagePath

    // function to call when scroll changes and update scroll amount
    const handleScrollAmountChange = useCallback(event => {

        const winScrollAmount =
            document.body.scrollTop || document.documentElement.scrollTop
            setScrollAmount(winScrollAmount)

    }, [])

    // on every scroll event, call the above method
    useEffect(() => {
        
        window.addEventListener('scroll', handleScrollAmountChange)
        return () => {
            window.removeEventListener('scroll', handleScrollAmountChange)
        }
        
    }, [handleScrollAmountChange])
 
        return (
            <div role="main">
            <NavBar 
            overImage={true} 
            scrollAmount={scrollAmount} 
            imageHeight={image.height}/>
            <Poster imageSrc={image.src}/>
            <Contributors data={data}/>
            </div>
        )
} 


export default LandingPage

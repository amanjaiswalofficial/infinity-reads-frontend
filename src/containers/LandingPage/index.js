// Library imports
import React, {useState, useCallback, useContext} from "react"

// Custom imports
import Contributors from 'containers/Contributors'
import data from 'data/profile.json'
import imagePath from 'assets/img/wallpaper.png'
import Billboard from "containers/Billboard/billboard"
import { AppContextProvider, AppContext } from "context/appContext";

const LandingPage = () => {

    const [state, dispatch] = useContext(AppContext);
    const [scrollAmount, setScrollAmount] = useState(null)

    // TODO: Improve this functionality
    const image = new Image()
    image.src = imagePath

    const setNavBarProps = () => {
        dispatch({
          type: "SET_NAVBAR_PROPS",
          payload: {
            overImage: true,
            scrollAmount: scrollAmount,
            imageHeight: image.height
          }
        });
      };

    // function to call when scroll changes and update scroll amount
    const handleScrollAmountChange = useCallback(event => {

        const winScrollAmount =
            document.body.scrollTop || document.documentElement.scrollTop
            setScrollAmount(winScrollAmount)
            setNavBarProps()

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

// Library imports
import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

// Custom imports
import './poster.css'


const Poster = ({imageSrc}) => {


    return (
        <div style={{position: "relative"}}>
            <img data-testid="component-poster" src={imageSrc} alt="" className="wallpaper"/>
        </div>
    )
}

export default Poster

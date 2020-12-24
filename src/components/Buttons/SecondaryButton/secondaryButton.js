import React from 'react'
import Button from '@material-ui/core/Button'

import { useStyles } from 'components/Buttons/makeCSS'

const SecondaryButton = ({handleClick, text, textColor="#FFFFFF", disabled=false}) => {

    const classes = useStyles();

    return (
        <Button 
            disabled={disabled}
            style={{color: textColor}} 
            className={classes.secondary} 
            onClick={handleClick}>
                {text}
        </Button>
    )
}

export default SecondaryButton

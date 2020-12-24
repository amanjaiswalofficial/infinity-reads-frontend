import React from 'react'
import Button from '@material-ui/core/Button'

import { useStyles } from 'components/Buttons/makeCSS'

const PrimaryButton = ({handleClick, text, disabled=false}) => {

    const classes = useStyles();

    return (
        <Button 
            disabled={disabled} 
            className={classes.primary} 
            onClick={handleClick}>
                {text}
        </Button>
    )
}

export default PrimaryButton

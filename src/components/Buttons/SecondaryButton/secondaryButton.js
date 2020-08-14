import React from 'react'
import Button from '@material-ui/core/Button'

import { useStyles } from 'components/Buttons/makeCSS'

const SecondaryButton = ({handleClick, text, textColor="#FFFFFF"}) => {

    const classes = useStyles();

    return (
        <Button style={{color: textColor}} className={classes.secondary} onClick={handleClick}>{text}</Button>
    )
}

export default SecondaryButton

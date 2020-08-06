import React from 'react'
import Button from '@material-ui/core/Button'

import { useStyles } from 'components/Buttons/makeCSS'

const SecondaryButton = ({handleClick, text}) => {

    const classes = useStyles();

    return (
        <Button className={classes.secondary} onClick={handleClick}>{text}</Button>
    )
}

export default SecondaryButton

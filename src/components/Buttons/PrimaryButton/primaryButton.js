import React from 'react'
import Button from '@material-ui/core/Button'

import { useStyles } from 'components/Buttons/makeCSS'

const PrimaryButton = ({handleClick, text}) => {

    const classes = useStyles();

    return (
        <Button className={classes.primary} onClick={handleClick}>{text}</Button>
    )
}

export default PrimaryButton

import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { bodyStyle } from '../../styles/body/bodyStyles';
import { Home } from '../Home/home';
import { BeOrNotBe } from '../BeOrNotBe/beOrNotBe';
import { Teatrerotes } from '../Teatrerotes/teatrerotes';

const useStyles = makeStyles(bodyStyle);

export const Body = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid
                className={classes.container}
                container
                justify='center'>
                <Grid item xs={12} md={10}>
                    <Home />
                    <BeOrNotBe/>
                    <Teatrerotes/>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}
import React, { useEffect, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { bodyStyle } from '../../styles/body/bodyStyles';
import { Home } from '../Home/home';
import { BeOrNotBe } from '../BeOrNotBe/beOrNotBe';
import { Teatrerotes } from '../Teatrerotes/teatrerotes';
import OnceUponATime from '../onceUponATime/onceUponATime'
import LetsMove from '../letsMove/letsMove'
import Classes from '../Classes/classes'
import Footer from '../footer/footer'
import firebase from '../../firebase'
import Menu from '../Menu/menu'

const useStyles = makeStyles(bodyStyle);

export const Body = () => {
    const classes = useStyles();
    const [data, setData] = useState(null)
    
    // fetch data 
    useEffect(() => {
        firebase.get().then(data => setData(data))
    }, [])

    return (
        <React.Fragment>
            <Menu />
            <Grid
                className={classes.container}
                container
                justify='center'>
                <Grid item xs={12} md={10}>
                    <Home />
                    <BeOrNotBe/>
                    <Teatrerotes/>
                    <OnceUponATime data={data}/>
                    <LetsMove data={data}/>
                    <Classes />
                    <Footer />
                </Grid>
            </Grid>

        </React.Fragment>
    )
}
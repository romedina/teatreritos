import React from 'react';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import { teatrerotesStyles } from '../../styles/teatrerotes/teatrerotesStyles';

const useStyles = makeStyles(teatrerotesStyles);

export const Teatrerotes = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box p={10} className={classes.mainContainer}>
                <div className={classes.pattern}>
                    <Grid container justify='center' alignItems='center'>
                        <Grid item xs={10} md={6}>
                            <Typography className={classes.darkBluefont} align='center' variant='h3'>Los Teatrerotes</Typography>
                            <Box className={classes.blueContainer} p={8}>
                                <Typography className={classes.whiteFont} gutterBottom>
                                    Gelys y Fofo son actores, bailarines y cantantes profesionales
                                    de toda la vida. Desarrollar el espíritu artístico y humano en
                                    los niños es su manera de crear un mundo mejor.
                            </Typography>
                                <Typography className={classes.whiteFont} gutterBottom>
                                    Son maestros de artes escénicas, danza y canto en escuelas
                                como M{'&'}M Studio Patricia Reyes Spíndola y Emlider Dance
                                Studio.
                            </Typography>
                                <Typography className={classes.whiteFont} gutterBottom>

                                    Sus principales logros se muestran en montajes teatrales de
                                    gran formato para niños como Paw Patrol, My Little Pony,
                                    Peppa Pig, Monster High, Pica Pica y Trepsi, entre otros.
                            </Typography>
                                <Typography className={classes.whiteFont} gutterBottom>
                                    Visión
                                    Despertar a los pequeños artistas de todo el mundo a través
                                    de una plataforma virtual para llenar el mundo de arte, teatro,
                                    danza, risas y creatividad.
                            </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </React.Fragment>
    )
}
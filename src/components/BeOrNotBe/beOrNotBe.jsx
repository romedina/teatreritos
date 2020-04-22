import React from 'react';
import { Grid, Typography, Box, makeStyles, Paper } from '@material-ui/core';
import { beOrNotBeStyles } from '../../styles/beOrNotBe/beOrNotBeStyle';
import geometrias from '../../assets/geometrias.svg';
import free from '../../assets/free.svg';
import feelings from '../../assets/feelings.svg';
import body from '../../assets/body.svg';
import creative from '../../assets/creative.svg';
import empathic from '../../assets/empathic.svg';
const useStyles = makeStyles(beOrNotBeStyles);

const awards = [
    {
        img: feelings,
        text: 'Al que mejor domina sus emociones',
    },
    {
        img: empathic,
        text: 'Al más empático con los sentimientos de los demás',
    },
    {
        img: body,
        text: 'Al que mejor conoce y domina las capacidades de su cuerpo',
    },
    {
        img: creative,
        text: 'Al más creativo',
    },
    {
        img: free,
        text: 'Al más libre y seguro'
    },

]

export const BeOrNotBe = () => {

    const classes = useStyles()

    return (
        <React.Fragment>
            <Box className={classes.container} p={{xs: 2, md: 10}} id='be'>
                <Grid container justify='center' alignItems='center'>


                    <Grid item xs={12} md={7}>
                        <Box pt={10} pl={{md: 10, xs: 3}} pr={{md: 10, xs: 3}}  pb={5}>
                            <Typography gutterBottom className={classes.whiteType} align='left' variant='h4'>Ser o no ser teatrerito,<br /> esa es la cuestión...</Typography>
                            <Typography className={classes.darkOrangeType}>A través del juego, el teatro y la danza los teatreritos se
                            entretienen mientras desarrollan nuevas habilidades que los
                        hacen más creativos, seguros y libres.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img style={{display: 'block', margin: 'auto'}} className={classes.geometrias} src={geometrias} alt='geometrias teatreritos' />
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.secondaryContainer} p={{md: 10, xs: 2}} >
                <Grid container justify='center' alignItems='center'>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.blueType} variant='h4' align='center'>Los Teatreritos de hoy mañana serán nominados...</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box p={5} pt={2} pb={2}>
                            <Grid container justify='center' alignItems='stretch' spacing={4}>
                                {
                                    awards.map((element,index) => {
                                        return (
                                            <Grid item xs={12} md={4} key={index}>
                                                <Paper className={classes.paperHeight} elevation={2}>
                                                    <Box p={5} >
                                                        <div style={{
                                                            width:'100%',
                                                            height:150,
                                                            backgroundRepeat:'no-repeat',
                                                            backgroundPosition:'center',
                                                            backgroundSize: 'contain',
                                                            backgroundImage: `url(${element.img})`,
                                                            
                                                        }} />
                                                        <Typography align='center' className={classes.orangeType}>
                                                            {element.text}
                                                        </Typography>
                                                    </Box>
                                                </Paper>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


        </React.Fragment>
    )
}
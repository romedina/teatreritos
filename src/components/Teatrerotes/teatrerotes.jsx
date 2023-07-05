import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import { teatrerotesStyles } from "../../styles/teatrerotes/teatrerotesStyles";
import Fig from "../../assets/fig.png";
import { styled } from "@material-ui/core/styles";

const useStyles = makeStyles(teatrerotesStyles);

export const Teatrerotes = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box p={{ md: 10, xs: 3 }} className={classes.mainContainer}>
        <div className={classes.pattern}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={8}>
              <Typography
                className={classes.darkBluefont}
                align="center"
                variant="h3"
              >
                Los Teatrerotes
              </Typography>
              <div style={{ display: "flex" }}>
                <Box className={classes.blueContainer} p={{ md: 8, xs: 3 }}>
                  <Typography className={classes.whiteFont} gutterBottom>
                    Gelys y Fofo son actores, bailarines y cantantes
                    profesionales. Han participado en los montajes teatrales
                    infantiles de Nick JR, Paw Patrol, My Little Pony, Peppa
                    Pig, Monster High, Pica Pica entre otros. Han participado en
                    la coreografía y giras de Karol Sevilla “Soy Luna” y tienen
                    una escuela de Teatro Musical "SISU" donde aman ayudar a los
                    demás a cumplir sus sueños.
                  </Typography>

                  <Typography
                    className={classes.whiteFont}
                    gutterBottom
                    variant="h4"
                    style={{
                      margin: "0px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    SUPERPODER
                  </Typography>
                  <Typography
                    className={classes.whiteFont}
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    AMAN A LOS NIÑOS
                  </Typography>
                </Box>
                <Box>
                  <img
                    style={{ maxWidth: 500 }}
                    src="https://firebasestorage.googleapis.com/v0/b/teatreritos-b8e2b.appspot.com/o/Teatrerotes.jpg?alt=media&token=603aeb17-746b-458a-bee0-04db927a0a26"
                    alt=""
                  />
                </Box>
              </div>

              <Figure src={Fig} />
            </Grid>
          </Grid>
        </div>
      </Box>
    </React.Fragment>
  );
};

const Figure = styled("img")({
  display: "block",
  width: "100%",
  "@media (min-width: 400px)": {
    marginTop: "-70px",
  },
});

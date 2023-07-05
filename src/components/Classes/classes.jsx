import React from "react";
import { styled } from "@material-ui/core/styles";
import { Grid, ButtonBase, Typography } from "@material-ui/core";

const Classes = (props) => {
  return (
    <Container id="classes">
      <Content container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <TypographyStyled variant="h3" align="center">
            Clases
          </TypographyStyled>
          <Typography style={{ fontSize: 20, padding: "30px 220px" }}>
            En Teatreritos tus hijos se sentirán seguros y podrán desatar toda
            su creatividad a través del juego, la danza y el teatro. Nuestro
            objetivo es brindarles las herramientas necesarias para que exploren
            su potencial artístico y descubran su pasión por las artes escénicas
            desde temprana edad. ¡Quién sabe, podrían convertirse en futuros
            profesionales del teatro musical!
          </Typography>
        </Grid>
        <Grid item xs={10} sm={5}>
          <ButtonPrimary
            onClick={(e) =>
              (window.location.href =
                "https://api.whatsapp.com/send/?phone=525561638566&text&type=phone_number&app_absent=0")
            }
          >
            Informes
          </ButtonPrimary>
        </Grid>
      </Content>
    </Container>
  );
};
const Container = styled("div")({
  padding: " 100px 40px",
  background: "#db3832",
  "& p": {
    display: "block",
    color: "#fff",
    textAlign: "center",
    maxWidth: "80%",
    margin: "10px auto",
  },
  "@media (max-width:500px)": {
    padding: "30px 10px",
  },
});

const Content = styled(Grid)({});

const TypographyStyled = styled(Typography)({
  color: "#fcee21",
  marginBottom: "20px",
});

const ButtonPrimary = styled(ButtonBase)({
  color: "#fff",
  background: "#00299f",
  width: "100%",
  padding: "20px",
  fontSize: "1.2em",
  borderRadius: "10px",
});

export default Classes;

import React from "react";
import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import VideoList from "./videloList";

const OnceUponATime = (props) => {
  return (
    <Content id="academia">
      <TypographyWhite variant="h2" align="center">
        Nuestra academia
      </TypographyWhite>
      <Gallery>
        <ImgWrapper>
          <ImagItem src="https://firebasestorage.googleapis.com/v0/b/teatreritos-b8e2b.appspot.com/o/salonteatreritos.jpg?alt=media&token=1cc22c1c-7e69-4bde-a654-911e39ab675a" />
        </ImgWrapper>
        <ImgWrapper>
          <ImagItem src="https://firebasestorage.googleapis.com/v0/b/teatreritos-b8e2b.appspot.com/o/bancos.png?alt=media&token=2de109db-c931-4dbf-b063-781f7061d09b" />
        </ImgWrapper>
        <ImgWrapper>
          <ImagItem src="https://firebasestorage.googleapis.com/v0/b/teatreritos-b8e2b.appspot.com/o/recepcion.png?alt=media&token=40cb6832-2006-4736-ae9f-c726f5daf2dd" />
        </ImgWrapper>
      </Gallery>
      <TypographyTitle style={{ color: "white" }} variant="h6" align="center">
        {" "}
        Insurgentes Sur 587. Colonia Nápoles. CDMX{" "}
      </TypographyTitle>
      <TypographyTitle style={{ marginTop: 100 }} variant="h2" align="center">
        Visita nuestro canal de Youtube
      </TypographyTitle>

      <VideoList {...props} section="primary" />
    </Content>
  );
};

const Gallery = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "space-between",
  padding: "50px 0px",
});

const ImgWrapper = styled("div")({
  maxWidth: 400,
});

const ImagItem = styled("img")({
  width: "100%",
  height: "100%",
});

const Content = styled("div")({
  background: "#00299f",
  padding: "50px",
  ["@media (max-width:400px)"]: {
    padding: "50px 15px",
  },
});

const TypographyWhite = styled(Typography)({
  color: "#fff",
  fontSize: "2em",
  fontFamily: "Baloo Paaji 2, cursive!important",
});

const TypographyTitle = styled(Typography)({
  fontSize: "2.8em",
  color: "#f8c033",
  fontFamily: "Baloo Paaji 2, cursive!important",
});
const TypographySecondary = styled(Typography)({
  fontSize: "1.6em",
  color: "#f8c033",
  fontFamily: "Baloo Paaji 2, cursive!important",
});

const Text = styled("p")({
  color: "#0daeb6",
  fontSize: "1.2em",
  textAlign: "center",
  maxWidth: "700px",
  margin: "auto",
  padding: "50px 0px",
});
export default OnceUponATime;

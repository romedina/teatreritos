import React from "react";
import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import VideoList from "../onceUponATime/videloList";

const OnceUponATime = (props) => {
  return (
    <Content>
      <TypographyWhite variant="h3" align="center">
        ¡Teatreritos a moverse!
      </TypographyWhite>

      <VideoList {...props} section="secondary" />
    </Content>
  );
};

const Content = styled("div")({
  background: "#ff6b00",
  padding: "50px",
  "@media (max-width:400px)": {
    padding: "50px 15px",
  },
});

const TypographyWhite = styled(Typography)({
  color: "#fff",
  fontSize: "2em",
});

const Text = styled("p")({
  fontSize: "1.2em",
  color: "#fff",
  textAlign: "center",
  maxWidth: "700px",
  margin: "auto",
  padding: "50px 0px",
});
export default OnceUponATime;

import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import { Fade } from "@material-ui/core";
import { Link } from "react-scroll";

const Menu = (props) => {
  const [selected, setSelected] = useState("home");
  const [fixed, setFixed] = useState(false);
  const [fixedMobile, setFixedMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      var scrolled = window.scrollY;
      if (scrolled > 200 && !fixed) {
        setFixed(true);
      } else if (scrolled < 200 && !!fixed) {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fixed]);

  // set position mobile
  useEffect(() => {
    const handleScroll = () => {
      var scrolled = window.scrollY;
      if (scrolled > 130 && !fixedMobile) {
        setFixedMobile(true);
      } else if (scrolled < 130 && !!fixedMobile) {
        setFixedMobile(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fixedMobile]);

  const position = {
    position: fixed ? "fixed" : "absolute",
    top: fixed ? "0" : "200px",
    background: fixed ? "#fff" : "",
    boxShadow: fixed ? "1px 1px 2px gray" : "",
  };

  const positionMobile = {
    position: fixedMobile ? "fixed" : "absolute",
    top: fixedMobile ? "10px" : "150px",
  };

  return (
    <Fade in={true} timeout={5000}>
      <div>
        <Content style={position}>
          <Item
            onSetActive={(e) => setSelected("home")}
            hashSpy={true}
            spy={true}
            smooth={true}
            selected={selected === "home"}
            to="home"
          >
            Inicio
          </Item>
          <Item
            onSetActive={(e) => setSelected("be")}
            hashSpy={true}
            spy={true}
            smooth={true}
            selected={selected === "be"}
            to="be"
          >
            Ser teatrerito o no ser
          </Item>
          <Item
            onSetActive={(e) => setSelected("academia")}
            hashSpy={true}
            spy={true}
            smooth={true}
            selected={selected === "academia"}
            to="academia"
          >
            Nuestra academia
          </Item>
          <Item
            onSetActive={(e) => setSelected("classes")}
            hashSpy={true}
            spy={true}
            smooth={true}
            selected={selected === "classes"}
            to="classes"
          >
            Clases
          </Item>
          <Item
            onClick={props.activeModalContact}
            selected={selected === "contact"}
            to="contact"
          >
            Contáctanos
          </Item>
          <WhatsAppItem href="https://api.whatsapp.com/send/?phone=525561638566&text&type=phone_number&app_absent=0">
            Escríbenos al Whatsapp
          </WhatsAppItem>
        </Content>
        <ContentMobile style={positionMobile}>
          <WhatsAppItem href="https://api.whatsapp.com/send/?phone=525561638566&text&type=phone_number&app_absent=0">
            Escríbenos al Whatsapp
          </WhatsAppItem>
        </ContentMobile>
      </div>
    </Fade>
  );
};

const Content = styled("nav")({
  padding: "10px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  top: "220px",
  position: "absolute",
  zIndex: 20,
  "@media (max-width:600px)": {
    display: "none",
  },
});

const ContentMobile = styled("nav")({
  padding: "10px 0px",
  justifyContent: "center",
  alignItems: "center",
  top: "150px",
  position: "fixed",
  background: "#fff",
  margin: "auto",
  left: 0,
  right: 0,
  width: "120px",
  textAlign: "center",
  zIndex: 20,
  display: "none",
  boxShadow: "2px 2px 3px #000",
  "@media (max-width:600px)": {
    display: "flex",
    borderRadius: "5px",
  },
});

const Item = styled(Link)({
  fontWeight: "bold",
  color: (props) => (props.selected ? "#fff" : "#016ea6"),
  background: (props) => (props.selected ? "#ffc808" : ""),
  marginRight: "20px",
  padding: "7px",
  borderRadius: "5px",
  textDecoration: "none",
  cursor: "pointer",
  "&:last-of-type": {
    marginRight: "0px",
  },
  "@media (max-width:600px)": {
    padding: "0px",
  },
});

const WhatsAppItem = styled("a")({
  background: "#25d366",
  padding: "3px",
  borderRadius: "8px",
  textDecoration: "none",
});

export default Menu;

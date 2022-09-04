import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLogo,
  FooterRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer style={{ background: "#000", height: "100px" }}>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLogo
            to="/"
            onClick={toggleHome}
            style={{
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.5rem",
              fontWeight: "bold",
              alignItems: "center",
              textDecoration: "none",
              marginLeft: "24px",
              justifySelf: "flex-start",
              display: "flex",
            }}
          >
            AlkOS
          </FooterLogo>
          <FooterRights
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: "16px",
              marginTop: "24px",
            }}
          >
            © AlkOS 2022. All rights reserved
          </FooterRights>
        </FooterLinksContainer>
      </FooterWrap>{" "}
    </FooterContainer>
  );
};

export default Footer;

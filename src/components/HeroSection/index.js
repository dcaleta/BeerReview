import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1,
  HeroContent,
  HeroP,
} from "./HeroElements";
import video from "../../video/video.mp4";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent style={{ zIndex: "999" }}>
        <HeroH1
          style={{
            color: "#fff",
            fontSize: "64px",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          AlkOs
        </HeroH1>
        <HeroP
          style={{
            color: "#fff",
            zIndex: "999",
            fontSize: "32px",
            textAlign: "center",
          }}
        >
          Okruži se dobrom ekipom ~ Opusti se pivom ~ Brige zaboravi ~ Kasnije
          se oporavi
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

import React from "react";
import { InfoContainer, InfoWrapper } from "./InfoElements";

function InfoSection() {
  return (
    <>
      <InfoContainer id={"map"}>
        <InfoWrapper>
          <iframe
            src="https://my.atlistmaps.com/map/083e8549-c83b-4d18-874f-4a70a08e2c92?share=true"
            allow="geolocation"
            width="100%"
            height="800px"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            title="map"
          ></iframe>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;

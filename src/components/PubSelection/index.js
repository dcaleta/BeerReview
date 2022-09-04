import React from "react";
import {
  SelectionSection,
  SelectionWrapper,
  SelectionHeading,
  SelectionContainer,
  SelectionContainerCard1,
  SelectionContainerCard,
  SelectionContainerCardInfo,
  Icon,
  H3,
  H4,
  PP,
  SelectionContainerFeatures,
  Features,
  OfferButton,
  BtnLink,
} from "./PubElements";

import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function PubSection() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <>
        <SelectionSection>
          <SelectionWrapper>
            <SelectionHeading to="/">AlkOS</SelectionHeading>

            <SelectionContainer>
              <SelectionContainerCard>
                <SelectionContainerCardInfo>
                  <Icon>
                    <FaBeer />
                  </Icon>
                  <H3>RUNDA</H3>
                  <H4>7</H4>
                  <PP>vrsta piva</PP>
                  <SelectionContainerFeatures>
                    <Features>Okruži se dobrom ekipom</Features>
                    <Features>Opusti se pivom</Features>
                    <Features>Brige zaboravi</Features>
                    <Features>Kasnije se oporavi</Features>
                  </SelectionContainerFeatures>
                  <OfferButton>
                    <BtnLink to="/runda">Ponuda</BtnLink>
                  </OfferButton>
                </SelectionContainerCardInfo>
              </SelectionContainerCard>

              <SelectionContainerCard1>
                <SelectionContainerCardInfo>
                  <Icon>
                    <FaBeer />
                  </Icon>
                  <H3>GAJBA</H3>
                  <H4>50+</H4>
                  <PP>vrsta piva</PP>
                  <SelectionContainerFeatures>
                    <Features>Okruži se dobrom ekipom</Features>
                    <Features>Opusti se pivom</Features>
                    <Features>Brige zaboravi</Features>
                    <Features>Kasnije se oporavi</Features>
                  </SelectionContainerFeatures>
                  <OfferButton>
                    <BtnLink to="/gajba">Ponuda</BtnLink>
                  </OfferButton>
                </SelectionContainerCardInfo>
              </SelectionContainerCard1>

              <SelectionContainerCard>
                <SelectionContainerCardInfo>
                  <Icon>
                    <FaBeer />
                  </Icon>
                  <H3>AMSTERDAM</H3>
                  <H4>24</H4>
                  <PP>vrste piva</PP>
                  <SelectionContainerFeatures>
                    <Features>Okruži se dobrom ekipom</Features>
                    <Features>Opusti se pivom</Features>
                    <Features>Brige zaboravi</Features>
                    <Features>Kasnije se oporavi</Features>
                  </SelectionContainerFeatures>
                  <OfferButton>
                    <BtnLink to="/amsterdam">Ponuda</BtnLink>
                  </OfferButton>
                </SelectionContainerCardInfo>
              </SelectionContainerCard>

              <SelectionContainerCard1>
                <SelectionContainerCardInfo>
                  <Icon>
                    <FaBeer />
                  </Icon>
                  <H3>BEERTIJA</H3>
                  <H4>10</H4>
                  <PP>vrsta piva</PP>
                  <SelectionContainerFeatures>
                    <Features>Okruži se dobrom ekipom</Features>
                    <Features>Opusti se pivom</Features>
                    <Features>Brige zaboravi</Features>
                    <Features>Kasnije se oporavi</Features>
                  </SelectionContainerFeatures>
                  <OfferButton>
                    <script
                      src="https://apps.elfsight.com/p/platform.js"
                      defer
                    ></script>
                    <div class="elfsight-app-76174028-4055-45d1-bbee-46b75f41a7ac"></div>
                    <BtnLink to="/beertija">Ponuda</BtnLink>
                  </OfferButton>
                </SelectionContainerCardInfo>
              </SelectionContainerCard1>
            </SelectionContainer>
          </SelectionWrapper>
        </SelectionSection>
      </>
    </IconContext.Provider>
  );
}

export default PubSection;

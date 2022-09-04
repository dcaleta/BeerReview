import React, { useState } from "react";
import {
  Section,
  Wrapper,
  Container,
  Table,
  HeaderRow,
  Header,
  BeersName,
  Tr,
  Icon,
  FaLink,
  Input,
} from "./RundaElements";
import { IconContext } from "react-icons/lib";
import { FaArrowCircleLeft, FaBeer } from "react-icons/fa";

const RundaOffer = () => {
  const [rating, setRating] = useState(null);
  const [rating1, setRating1] = useState(null);
  const [rating2, setRating2] = useState(null);
  const [rating3, setRating3] = useState(null);
  const [rating4, setRating4] = useState(null);
  const [rating5, setRating5] = useState(null);
  const [rating6, setRating6] = useState(null);

  const [hover, setHover] = useState(null);
  const [hover1, setHover1] = useState(null);
  const [hover2, setHover2] = useState(null);
  const [hover3, setHover3] = useState(null);
  const [hover4, setHover4] = useState(null);
  const [hover5, setHover5] = useState(null);
  const [hover6, setHover6] = useState(null);

  return (
    <IconContext.Provider value={{ color: "#fff", size: 24 }}>
      <>
        <Section>
          <Wrapper>
            <Container>
              <Table>
                <HeaderRow>
                  <Header>PONUDA</Header>
                  <Header> </Header>
                </HeaderRow>
                <Tr>
                  <BeersName>Varionica Pale Ale</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover || rating)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>

                <Tr>
                  <BeersName>Beckers Pale Ale</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating1(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover1 || rating1)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover1(ratingValue)}
                            onMouseLeave={() => setHover1(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>

                <Tr>
                  <BeersName>5th Element ABA</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating2(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover2 || rating2)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover2(ratingValue)}
                            onMouseLeave={() => setHover2(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>

                <Tr>
                  <BeersName>5th Element Imperial</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating3(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover3 || rating3)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover3(ratingValue)}
                            onMouseLeave={() => setHover3(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>

                <Tr>
                  <BeersName>Osječko nefiltrirano</BeersName>
                  <td>
                    {" "}
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating4(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover4 || rating4)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover4(ratingValue)}
                            onMouseLeave={() => setHover4(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>

                <Tr>
                  <BeersName>Osječko crno</BeersName>
                  <td>
                    {" "}
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating5(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover5 || rating5)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover5(ratingValue)}
                            onMouseLeave={() => setHover5(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>

                <Tr>
                  <BeersName>1066 Pivovara 022</BeersName>
                  <td>
                    {" "}
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating6(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover6 || rating6)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover6(ratingValue)}
                            onMouseLeave={() => setHover6(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
              </Table>
            </Container>
            <Icon>
              <FaLink to="/pubs">
                <FaArrowCircleLeft />
              </FaLink>
            </Icon>
          </Wrapper>
        </Section>
      </>
    </IconContext.Provider>
  );
};

export default RundaOffer;

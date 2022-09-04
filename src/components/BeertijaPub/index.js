import React, { useState } from "react";
import { FaBeer, FaArrowCircleLeft } from "react-icons/fa";
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
} from "../RundaPub/RundaElements";
import { IconContext } from "react-icons/lib";

const BeertijaOffer = () => {
  const [rating, setRating] = useState(null);
  const [rating1, setRating1] = useState(null);
  const [rating2, setRating2] = useState(null);
  const [rating3, setRating3] = useState(null);
  const [rating4, setRating4] = useState(null);
  const [rating5, setRating5] = useState(null);
  const [rating6, setRating6] = useState(null);
  const [rating7, setRating7] = useState(null);
  const [rating8, setRating8] = useState(null);

  const [hover, setHover] = useState(null);
  const [hover1, setHover1] = useState(null);
  const [hover2, setHover2] = useState(null);
  const [hover3, setHover3] = useState(null);
  const [hover4, setHover4] = useState(null);
  const [hover5, setHover5] = useState(null);
  const [hover6, setHover6] = useState(null);
  const [hover7, setHover7] = useState(null);
  const [hover8, setHover8] = useState(null);

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
                  <BeersName>APA</BeersName>
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
                  <BeersName>C4</BeersName>
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
                  <BeersName>Fireball</BeersName>
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
                  <BeersName>Hladovina</BeersName>
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
                  <BeersName>Throattwister</BeersName>
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
                  <BeersName>Hill 438</BeersName>
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
                  <BeersName>Boh: Beginning</BeersName>
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

                <Tr>
                  <BeersName>Brutislav</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating7(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover7 || rating7)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover7(ratingValue)}
                            onMouseLeave={() => setHover7(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>

                <Tr>
                  <BeersName>Brale</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating8(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover8 || rating8)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover8(ratingValue)}
                            onMouseLeave={() => setHover8(null)}
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

export default BeertijaOffer;

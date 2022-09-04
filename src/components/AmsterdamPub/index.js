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
} from "./AmsterdamElements";
import { IconContext } from "react-icons/lib";
import { FaArrowCircleLeft, FaBeer } from "react-icons/fa";
const AmsterdamOffer = () => {
  const [rating, setRating] = useState(null);
  const [rating1, setRating1] = useState(null);
  const [rating2, setRating2] = useState(null);
  const [rating3, setRating3] = useState(null);
  const [rating4, setRating4] = useState(null);
  const [rating5, setRating5] = useState(null);
  const [rating6, setRating6] = useState(null);

  const [rating7, setRating7] = useState(null);
  const [rating8, setRating8] = useState(null);
  const [rating9, setRating9] = useState(null);
  const [rating10, setRating10] = useState(null);
  const [rating11, setRating11] = useState(null);
  const [rating12, setRating12] = useState(null);
  const [rating13, setRating13] = useState(null);
  const [rating14, setRating14] = useState(null);
  const [rating15, setRating15] = useState(null);
  const [rating16, setRating16] = useState(null);
  const [rating17, setRating17] = useState(null);
  const [rating18, setRating18] = useState(null);
  const [rating19, setRating19] = useState(null);
  const [rating20, setRating20] = useState(null);
  const [rating21, setRating21] = useState(null);
  const [rating22, setRating22] = useState(null);
  const [rating23, setRating23] = useState(null);

  const [hover, setHover] = useState(null);
  const [hover1, setHover1] = useState(null);
  const [hover2, setHover2] = useState(null);
  const [hover3, setHover3] = useState(null);
  const [hover4, setHover4] = useState(null);
  const [hover5, setHover5] = useState(null);
  const [hover6, setHover6] = useState(null);

  const [hover7, setHover7] = useState(null);
  const [hover8, setHover8] = useState(null);
  const [hover9, setHover9] = useState(null);
  const [hover10, setHover10] = useState(null);
  const [hover11, setHover11] = useState(null);
  const [hover12, setHover12] = useState(null);
  const [hover13, setHover13] = useState(null);
  const [hover14, setHover14] = useState(null);
  const [hover15, setHover15] = useState(null);
  const [hover16, setHover16] = useState(null);
  const [hover17, setHover17] = useState(null);
  const [hover18, setHover18] = useState(null);
  const [hover19, setHover19] = useState(null);
  const [hover20, setHover20] = useState(null);
  const [hover21, setHover21] = useState(null);
  const [hover22, setHover22] = useState(null);
  const [hover23, setHover23] = useState(null);

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
                  <BeersName>Aba 5th Element</BeersName>
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
                  <BeersName>Walkow</BeersName>
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
                  <BeersName>Zmajsko Pale Ale</BeersName>
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
                  <BeersName>Grif Pale Ale</BeersName>
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
                  <BeersName>Grička vještica</BeersName>
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
                  <BeersName>Zlatni Medvjed</BeersName>
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
                  <BeersName>Leffe</BeersName>
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
                  <BeersName>Laško Ipa</BeersName>
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
                  <BeersName>Osječko</BeersName>
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
                <Tr>
                  <BeersName>Vukovarsko</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating9(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover9 || rating9)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover9(ratingValue)}
                            onMouseLeave={() => setHover9(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Ožujsko</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating10(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover10 || rating10)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover10(ratingValue)}
                            onMouseLeave={() => setHover10(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Kozel</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating11(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover11 || rating11)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover11(ratingValue)}
                            onMouseLeave={() => setHover11(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Tomislav</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating12(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover12 || rating12)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover12(ratingValue)}
                            onMouseLeave={() => setHover12(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Nikšičko</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating13(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover13 || rating13)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover13(ratingValue)}
                            onMouseLeave={() => setHover13(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Karlovačko</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating14(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover14 || rating14)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover14(ratingValue)}
                            onMouseLeave={() => setHover14(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Staročeško</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating15(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover15 || rating15)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover15(ratingValue)}
                            onMouseLeave={() => setHover15(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Cincilator</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating16(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover16 || rating16)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover16(ratingValue)}
                            onMouseLeave={() => setHover16(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Gefufna</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating17(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover17 || rating17)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover17(ratingValue)}
                            onMouseLeave={() => setHover17(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Franziskaner</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating18(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover18 || rating18)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover18(ratingValue)}
                            onMouseLeave={() => setHover18(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Stari Lisac</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating19(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover19 || rating19)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover19(ratingValue)}
                            onMouseLeave={() => setHover19(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Heineken</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating20(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover20 || rating20)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover20(ratingValue)}
                            onMouseLeave={() => setHover20(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Budweiser</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating21(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover21 || rating21)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover21(ratingValue)}
                            onMouseLeave={() => setHover21(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Krušovice</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating22(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover22 || rating22)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover22(ratingValue)}
                            onMouseLeave={() => setHover22(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Becks</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating23(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover23 || rating23)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover23(ratingValue)}
                            onMouseLeave={() => setHover23(null)}
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

export default AmsterdamOffer;

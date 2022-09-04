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
} from "./GajbaElements";
import { IconContext } from "react-icons/lib";
import { FaArrowCircleLeft, FaBeer } from "react-icons/fa";

const GajbaOffer = () => {
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
  const [rating24, setRating24] = useState(null);

  const [rating25, setRating25] = useState(null);
  const [rating26, setRating26] = useState(null);
  const [rating27, setRating27] = useState(null);
  const [rating28, setRating28] = useState(null);

  const [rating29, setRating29] = useState(null);
  const [rating30, setRating30] = useState(null);
  const [rating31, setRating31] = useState(null);
  const [rating32, setRating32] = useState(null);

  const [rating33, setRating33] = useState(null);
  const [rating34, setRating34] = useState(null);
  const [rating35, setRating35] = useState(null);
  const [rating36, setRating36] = useState(null);

  const [rating37, setRating37] = useState(null);
  const [rating38, setRating38] = useState(null);
  const [rating39, setRating39] = useState(null);
  const [rating40, setRating40] = useState(null);

  const [rating41, setRating41] = useState(null);
  const [rating42, setRating42] = useState(null);
  const [rating43, setRating43] = useState(null);
  const [rating44, setRating44] = useState(null);

  const [rating45, setRating45] = useState(null);
  const [rating46, setRating46] = useState(null);
  const [rating47, setRating47] = useState(null);
  const [rating48, setRating48] = useState(null);
  const [rating49, setRating49] = useState(null);

  const [rating50, setRating50] = useState(null);
  const [rating51, setRating51] = useState(null);
  const [rating52, setRating52] = useState(null);
  const [rating53, setRating53] = useState(null);

  const [rating54, setRating54] = useState(null);
  const [rating55, setRating55] = useState(null);
  const [rating56, setRating56] = useState(null);
  const [rating57, setRating57] = useState(null);

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
  const [hover24, setHover24] = useState(null);

  const [hover25, setHover25] = useState(null);
  const [hover26, setHover26] = useState(null);
  const [hover27, setHover27] = useState(null);
  const [hover28, setHover28] = useState(null);
  const [hover29, setHover29] = useState(null);
  const [hover30, setHover30] = useState(null);

  const [hover31, setHover31] = useState(null);
  const [hover32, setHover32] = useState(null);
  const [hover33, setHover33] = useState(null);
  const [hover34, setHover34] = useState(null);
  const [hover35, setHover35] = useState(null);
  const [hover36, setHover36] = useState(null);

  const [hover37, setHover37] = useState(null);
  const [hover38, setHover38] = useState(null);
  const [hover39, setHover39] = useState(null);
  const [hover40, setHover40] = useState(null);
  const [hover41, setHover41] = useState(null);
  const [hover42, setHover42] = useState(null);

  const [hover43, setHover43] = useState(null);
  const [hover44, setHover44] = useState(null);
  const [hover45, setHover45] = useState(null);
  const [hover46, setHover46] = useState(null);
  const [hover47, setHover47] = useState(null);
  const [hover48, setHover48] = useState(null);

  const [hover49, setHover49] = useState(null);
  const [hover50, setHover50] = useState(null);
  const [hover51, setHover51] = useState(null);
  const [hover52, setHover52] = useState(null);
  const [hover53, setHover53] = useState(null);
  const [hover54, setHover54] = useState(null);

  const [hover55, setHover55] = useState(null);
  const [hover56, setHover56] = useState(null);
  const [hover57, setHover57] = useState(null);

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
                  <BeersName>Sierra Nevada Pale Ale</BeersName>
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
                  <BeersName>Sierra Nevada Porter</BeersName>
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
                  <BeersName>Sierra Nevada Torpedo IPA</BeersName>
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
                  <BeersName>Chimay blue</BeersName>
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
                  <BeersName>Chimay red</BeersName>
                  <td>
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
                  <BeersName>Chimay white</BeersName>
                  <td>
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
                  <BeersName>DELIRIUM Argentum</BeersName>
                  <td>
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
                  <BeersName>DELIRIUM Nocturnum</BeersName>
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
                  <BeersName>DELIRIUM red</BeersName>
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
                  <BeersName>DELIRIUM tremens</BeersName>
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
                  <BeersName>Duvel</BeersName>
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
                  <BeersName>Gulden Draak</BeersName>
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
                  <BeersName>Karmeliet tripel</BeersName>
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
                  <BeersName>Kassteel Barista</BeersName>
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
                  <BeersName>Kasteel Rouge</BeersName>
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
                  <BeersName>La Chouffe</BeersName>
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
                  <BeersName>Lindemans Apple</BeersName>
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
                  <BeersName>Lindemans Cassis</BeersName>
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
                  <BeersName>Lindemans Framboise</BeersName>
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
                  <BeersName>Lindemans Pecheresse</BeersName>
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
                  <BeersName>Mc Chouffe</BeersName>
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
                  <BeersName>Orval</BeersName>
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
                  <BeersName>Pauwel Kwak</BeersName>
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
                  <BeersName>Rochefort 10°</BeersName>
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
                <Tr>
                  <BeersName>Rochefort 6°</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating24(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover24 || rating24)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover24(ratingValue)}
                            onMouseLeave={() => setHover24(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Rochefort 8°</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating25(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover25 || rating25)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover25(ratingValue)}
                            onMouseLeave={() => setHover25(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Westmalle Dubbel</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating26(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover26 || rating26)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover26(ratingValue)}
                            onMouseLeave={() => setHover26(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Westmalle Tripel</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating27(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover27 || rating27)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover27(ratingValue)}
                            onMouseLeave={() => setHover27(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Bernard Celebration lager</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating28(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover28 || rating28)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover28(ratingValue)}
                            onMouseLeave={() => setHover28(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>BERNARD Dark Lager</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating29(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover29 || rating29)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover29(ratingValue)}
                            onMouseLeave={() => setHover29(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Bernard JANTAROVÝ LEŽÁK</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating30(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover30 || rating30)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover30(ratingValue)}
                            onMouseLeave={() => setHover30(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Malastrana Dark Lager 0,5l</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating31(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover31 || rating31)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover31(ratingValue)}
                            onMouseLeave={() => setHover31(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Malastrana Original Pils</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating32(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover32 || rating32)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover32(ratingValue)}
                            onMouseLeave={() => setHover32(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Põhjala Must Kuld</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating33(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover33 || rating33)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover33(ratingValue)}
                            onMouseLeave={() => setHover33(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>ABA 5th ELEMENT</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating34(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover34 || rating34)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover34(ratingValue)}
                            onMouseLeave={() => setHover34(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>BECKERS Kolsch</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating35(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover35 || rating35)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover35(ratingValue)}
                            onMouseLeave={() => setHover35(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>BECKERS Mangulica</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating36(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover36 || rating36)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover36(ratingValue)}
                            onMouseLeave={() => setHover36(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>BECKERS Pale Ale</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating37(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover37 || rating37)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover37(ratingValue)}
                            onMouseLeave={() => setHover37(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Mali Div CINCILATOR</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating38(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover38 || rating38)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover38(ratingValue)}
                            onMouseLeave={() => setHover38(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Mali Div GEFUFNA</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating39(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover39 || rating39)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover39(ratingValue)}
                            onMouseLeave={() => setHover39(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Mali Div KATAKLINGER</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating40(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover40 || rating40)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover40(ratingValue)}
                            onMouseLeave={() => setHover40(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>PriMarius Ringišpil</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating41(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover41 || rating41)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover41(ratingValue)}
                            onMouseLeave={() => setHover41(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                  <Tr>
                  <BeersName>Pulfer Brundel Weiss</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating42(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover42 || rating42)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover42(ratingValue)}
                            onMouseLeave={() => setHover42(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
            <Tr>
                  <BeersName>Pulfer LANDSKY sess, IPA</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating43(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover43 || rating43)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover43(ratingValue)}
                            onMouseLeave={() => setHover43(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>THE GARDEN BREWERY Pale Ale</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating44(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover44 || rating44)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover44(ratingValue)}
                            onMouseLeave={() => setHover44(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                  <Tr>
                  <BeersName>Zmajska pivovara PALE ALE</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating45(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover45 || rating45)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover45(ratingValue)}
                            onMouseLeave={() => setHover45(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                 <Tr>
                  <BeersName>Zmajska pivovara Porter</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating46(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover46 || rating46)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover46(ratingValue)}
                            onMouseLeave={() => setHover46(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Aecht Schlenkerla Rauchbier Weizen</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating47(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover47 || rating47)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover47(ratingValue)}
                            onMouseLeave={() => setHover47(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                 <Tr>
                  <BeersName>Schneider Aventinus Eisbock</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating48(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover48 || rating48)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover48(ratingValue)}
                            onMouseLeave={() => setHover48(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>Schneider Aventinus TAP 6</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating49(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover49 || rating49)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover49(ratingValue)}
                            onMouseLeave={() => setHover49(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                  <Tr>
                  <BeersName>Schneider Meine Blonde TAP1</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating50(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover50 || rating50)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover50(ratingValue)}
                            onMouseLeave={() => setHover50(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                 <Tr>
                  <BeersName>Weihenstephaner Vitus</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating51(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover51 || rating51)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover51(ratingValue)}
                            onMouseLeave={() => setHover51(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                 <Tr>
                  <BeersName>BrewDog Elvis Juice</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating52(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover52 || rating52)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover52(ratingValue)}
                            onMouseLeave={() => setHover52(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                 <Tr>
                  <BeersName>BrewDog Jack Hammer</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating53(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover53 || rating53)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover53(ratingValue)}
                            onMouseLeave={() => setHover53(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                 <Tr>
                  <BeersName>BrewDog Nanny State AF</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating54(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover54 || rating54)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover54(ratingValue)}
                            onMouseLeave={() => setHover54(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>BrewDog Punk IPA</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating55(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover55 || rating55)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover55(ratingValue)}
                            onMouseLeave={() => setHover55(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>BrewDog Vagabond</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating56(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover56 || rating56)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover56(ratingValue)}
                            onMouseLeave={() => setHover56(null)}
                          />
                        </label>
                      );
                    })}
                  </td>
                </Tr>
                <Tr>
                  <BeersName>BREWDOG ZOMBIE CAKE</BeersName>
                  <td>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <Input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating57(ratingValue)}
                          />
                          <FaBeer
                            color={
                              ratingValue <= (hover57 || rating57)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover57(ratingValue)}
                            onMouseLeave={() => setHover57(null)}
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

export default GajbaOffer;

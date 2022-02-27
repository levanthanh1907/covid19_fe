import React from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import logo from "../../asset/img/logobyt.jpg";
import { data } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const TitleHeader = styled.div`
  font-size: 22px;
`;

const AddContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  gap: 50px;
`;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const TextTittle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Img = styled.img`
  width: 5%;
  height: 5%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const ContentLeft = styled.div`
  border: 0;
  box-sizing: border-box;
  width: 50%;
`;

const ContentRight = styled.div`
  border: 0;
  box-sizing: border-box;
  width: 50%;
`;



export default function Home() {
    
  
  return (
    <Wrapper>
      <HeaderHome>
        <TitleHeader>Trang chủ</TitleHeader>
        <MoreVertIcon />
      </HeaderHome>
      <hr />
      <Container>
        <Header>
          <Img src={logo} alt={""} />
          <TextTittle>
            Phòng chống bệnh viêm đường hô hấp cấp Covid-19
          </TextTittle>
        </Header>
        <Content>
          <ContentLeft>
          

          </ContentLeft>
          <ContentRight></ContentRight>
        </Content>
      </Container>
    </Wrapper>
  );
}

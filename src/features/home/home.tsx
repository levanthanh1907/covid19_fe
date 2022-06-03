import React from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import logo from "../../asset/img/logobyt.jpg";
import { data } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0px 40px 60px;
`;

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
  border: 0;
  box-sizing: border-box;
  gap: 20px;
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

//

const Item = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Image = styled.img``;

const Box = styled(Slider)`
  box-sizing: border-box;
  margin: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  flex-wrap: nowrap;
  will-change: transform;

  cursor: pointer;
  .slick-prev:before {
    content: none;
  }
  .slick-next:before {
    content: none;
  }
  .slick-slide > div {
    margin: 0;
  }
  .slick-list {
    margin: 0;
  }
`;

const BoxImage = styled.div`
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxText = styled.div`
  padding-top: 15px;
  text-align: center;
`;

const SliderWrapper = styled.div`
  position: relative;
`;
const TextName = styled.h4`
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 0;
`;

const RightTitle = styled.div`
  width: 100%;
  height: 30px;
  background-color: blue;
`;

const TextContent = styled.div`
  font-size: 20px;
  color: white;
  padding-left: 20px;
`;

const TextConten = styled.div``;

const Ul = styled.ul`
  list-style-position: outside;
  list-style-type: disc;
  gap: 10px;
`;

const Li = styled.li``;

const Textlist = styled.div`
  font-size: 18px;
  color: black;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export default function Home() {
  const settings: Settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
  };

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
            <SliderWrapper>
              <Box {...settings}>
                {data.map((item, index) => {
                  return (
                    <Item key={index}>
                      <BoxImage>
                        <Image src={item.image}></Image>
                      </BoxImage>
                      <BoxText>
                        {" "}
                        <TextName>{item.title}</TextName>
                      </BoxText>
                    </Item>
                  );
                })}
              </Box>
            </SliderWrapper>
          </ContentLeft>
          <ContentRight>
            <RightTitle>
              <TextContent>Tin nổi bật</TextContent>
              <TextConten>
                <Ul>
                  <Li>
                    <Textlist>
                      Bộ Y tế tiếp nhận 7,2 triệu liều vaccine do Australia tài
                      trợ để cho trẻ em từ 5 đến dưới 12 tuổi
                    </Textlist>
                  </Li>
                  <Li>
                    <Textlist>
                      Bộ Y tế quán triệt, truyền thông về quyền lợi của người
                      dân đối với giấy xác nhận tiêm chủng COVID-19 và “Hộ chiếu
                      vắc xin
                    </Textlist>
                  </Li>
                  <Li>
                    <Textlist>
                      Bộ y tế họp triển khai tình hình dịch bệnh và đưa ra
                      phương án dự phòng.
                    </Textlist>
                  </Li>
                  <Li>
                    <Textlist>
                      Bộ Y tế phối hợp chặt chẽ với tỉnh Hà Tĩnh chuẩn bị các
                      hoạt động tôn vinh Đại danh Y Hải Thượng Lãn Ông Lê Hữu
                      Trác
                    </Textlist>
                  </Li>
                  <Li>
                    <Textlist>
                      Bệnh viện Da liễu Trung ương kỷ niệm 40 năm thành lập và
                      đón nhận Huân chương Lao động hạng Nhất
                    </Textlist>
                  </Li>
                </Ul>
              </TextConten>
            </RightTitle>
          </ContentRight>
        </Content>
      </Container>
    </Wrapper>
  );
}

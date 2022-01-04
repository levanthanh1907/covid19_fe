import React from "react";
import styled from "styled-components";
import byt from "../../asset/img/logobyt.jpg"

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const ImgNotFound = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.div`
  font-size: 26px;
  color: red;
`;

const NotFound: React.FC = () => {
  return (
    <Content>
      <img src={byt} />
      <Title>Trang này không có sẵn. Mong bạn thông cảm.</Title>
      <Title>Bạn thử tìm cụm từ khác xem sao nhé.</Title>
    </Content>
  );
};

export default NotFound;

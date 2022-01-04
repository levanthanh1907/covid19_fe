import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../asset/img/logobyt.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Modal, Tab } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Colors } from "./color";

const Container = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const LeftBlock = styled.div`
  display: flex;
  margin-left: 25px;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
  }
`;
const Title = styled.div`
  margin-left: 5px;
  color: #fff;
  font-size: 18px;
`;

const RightBlock = styled.div`
  margin-right: 25px;
`;
const StyleBox = styled(Box)`
  position: absolute;
  top: 62.2%;
  left: 87.4%;
  transform: translate(-50%, -50%);
  width: 22.5%;
  height: 100vh;
  background-color: white;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const StyleNav = styled.div`
  border-bottom: 1px solid #eee;
  padding: 10px;
`;
const BlockNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const LeftBlockNav = styled.div`
  display: flex;
  width: 50%;
  gap: 10%;
  align-items: center;
`;
const TextLeftBlockNav = styled.p`
  white-space: nowrap;
  font-size: 15px;
`;
const RightBlockNav = styled.div``;
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#2169f3");
  const [value, setValue] = useState("1");
  const [color, setColor] = useState("#2169f3");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleCheck = (key: string) => {
    setActive(key);
    setColor(key);
  };

  return (
    <Container
      style={{
        background: `${color}`,
      }}
    >
      <LeftBlock>
        <img src={logo} alt={""} />
        <Title>Hệ thống quản lý người cách ly và người bệnh COVID-19</Title>
      </LeftBlock>
      <RightBlock>
        <MoreVertIcon style={{ color: "#fff" }} onClick={handleOpen} />
      </RightBlock>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyleBox>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="SKINS" value="1" />
                <Tab label="SETTINGS" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: "0" }}>
              {Colors.map((item, index) => (
                <StyleNav key={index}>
                  <BlockNav onClick={() => handleCheck(item.color)}>
                    <LeftBlockNav
                      style={{
                        display: "flex",
                        width: "50%",
                        gap: "10%",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          background: `${item.color}`,
                          width: "25%",
                          height: "30px",
                          borderRadius: "5px",
                        }}
                      ></div>
                      <TextLeftBlockNav
                        style={{ whiteSpace: "nowrap", fontSize: "15px" }}
                      >
                        {item.nameColor}
                      </TextLeftBlockNav>
                    </LeftBlockNav>
                    <RightBlockNav key={index}>
                      <CheckIcon
                        style={{
                          display: active === item.color ? "inline" : "none",
                        }}
                      />
                    </RightBlockNav>
                  </BlockNav>
                </StyleNav>
              ))}
            </TabPanel>
            <TabPanel value="2">SETTINGS</TabPanel>
          </TabContext>
        </StyleBox>
      </Modal>
    </Container>
  );
};

export default Header;

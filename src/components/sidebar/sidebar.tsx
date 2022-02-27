import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AddIcon from "@mui/icons-material/Add";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import styled from "styled-components";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
import bgrsidebar from "../../asset/img/images.png";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import logo from "../../asset/img/doctor.jpg";
import { useDispatch } from "react-redux";
import { removeAccessToken } from "../../utils/localStorageService";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const SidebarContainer = styled.div`
  width: 350px;
  height: 100%;
  position: fixed;
  margin-top: 70px;
  background-color: #fff;
  z-index: 999;
`;

const User = styled.div`
  background-image: url(${bgrsidebar});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 15px 25px 0;
`;

const User_info = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  img {
    border: 0;
    border-radius: 50%;
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
    height: 40px;
    width: 40px;
  }
`;

const Logout = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const ButtonLogout = styled.div`
  display: flex;
  gap: 5px;
  background: #fff;
  border: 1px solid;
  padding: 5px;
  position: absolute;
  margin: 15px;
  z-index: 1;
  border-radius: 5px;
  :hover {
    background: #e9e9e9;
  }
`;

const Title = styled.div`
  color: #fff;
  font-size: 14px;
`;

const StyleLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

const FooterSideBar = styled.div`
  position: absolute;
  height: 100px;
  bottom: 70px;
  background: #fff;
  width: 100%;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleFooter = styled.div`
  color: #000;
  font-size: 16px;
  line-height: 30px;
`;

const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [btn, setBtn] = React.useState(false);

  const handleClickBtn = () => {
    setBtn((prev) => !prev);
  };

  const history = useHistory();
  const handleclickLogout = () => {
    removeAccessToken();
    history.push("/account/login");
  };

  const dispatch = useDispatch();
  return (
    <SidebarContainer>
      <User>
        <User_info>
          <Info>
            <img src={`${logo}`} />
            <div>
              <Title>ADMIN</Title>
              <Title>LeVanThanh@nccsoft.com</Title>
            </div>
          </Info>
        </User_info>
        <Logout>
          <div onClick={handleClickBtn}>
            <KeyboardArrowDownIcon />
          </div>
          {btn ? (
            <ButtonLogout onClick={handleclickLogout}>
              <LogoutIcon />
              Logout
            </ButtonLogout>
          ) : null}
        </Logout>
      </User>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          ></ListSubheader>
        }
      >
        <StyleLink to="/app/home">
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Trang chủ" />
          </ListItemButton>
        </StyleLink>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Người quản trị" />
          {open ? <AddIcon /> : <AddIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyleLink to="/app/main/user">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Người dùng" />
              </ListItemButton>
            </StyleLink>
            <StyleLink to="/app/main/role">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Vai trò" />
              </ListItemButton>
            </StyleLink>
          </List>
        </Collapse>
        <StyleLink to="/app/main/task">
          <ListItemButton>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Hướng điều trị" />
          </ListItemButton>
        </StyleLink>
        <StyleLink to="/app/main/project">
          <ListItemButton>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Phòng điều trị" />
          </ListItemButton>
        </StyleLink>
        <StyleLink to="/app/main/search">
          <ListItemButton>
            <ListItemIcon>
              <ManageSearchIcon />
            </ListItemIcon>
            <ListItemText primary="Tra cứu thông tin" />
          </ListItemButton>
        </StyleLink>
      </List>
      <FooterSideBar>
        <TitleFooter>
          @2021 <span style={{ color: "red" }}>Covid19</span>
        </TitleFooter>
        <TitleFooter>
          <span style={{ fontWeight: "bold" }}>Programmer: </span> Le Van Thanh
        </TitleFooter>
      </FooterSideBar>
    </SidebarContainer>
  );
};

export default SideBar;

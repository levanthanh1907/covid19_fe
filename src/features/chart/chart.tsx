import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useDispatch } from "react-redux";
import Hospitalize from "./ListChart/Hospitalize";
import DischargeHospital from "./ListChart/DischargeHospital";

const ProjectContent = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderProject = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const TitleHeader = styled.div`
  font-size: 22px;
`;

const AddContent1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  gap: 50px;
  height: 300px;
`;

const AddContent2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  gap: 50px;
  height: 300px;
`;

export default function ListChart() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTask());
  // });
  // const [searchItem, setSearchItem] = useState("");
  // useEffect(() => {
  //   dispatch(
  //     setSearchName({
  //       searchName: searchItem,
  //     })
  //   );
  // }, [searchItem, dispatch]);

  return (
    <ProjectContent>
      <HeaderProject>
        <TitleHeader>Biểu đồ chi tiết</TitleHeader>
        <MoreVertIcon />
      </HeaderProject>
      <hr />
      <AddContent1>
        <Hospitalize />
      </AddContent1>
      <AddContent2>
        <DischargeHospital />
      </AddContent2>
    </ProjectContent>
  );
}

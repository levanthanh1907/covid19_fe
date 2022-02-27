import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchRoom from './lookupRoom/lookupRoom';
import { useDispatch } from 'react-redux';
import ListRoom from './listRoom/ListRoom';

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

const AddContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  gap: 50px;
`;



export default function Lookup() {
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
        <TitleHeader>Tra cứu thông tin</TitleHeader>
        <MoreVertIcon />
      </HeaderProject>
      <hr />
      <AddContent>
        <SearchRoom /> 
      </AddContent>
      <ListRoom/>
    </ProjectContent>
    )
}

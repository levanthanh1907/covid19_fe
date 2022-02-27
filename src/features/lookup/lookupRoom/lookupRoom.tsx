import React, { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import { ISearchRoom } from "../../../interfaces/search/searchType";
import { useDispatch, useSelector } from "react-redux";
import { getLookUpRoom } from "../../../redux/actions/project";
import { RootState } from "../../../redux/store";

const Wrapper = styled.div``;

const SearchSelect = styled.div``;

const SearchContainer = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Tittle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export default function SearchRoom() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const rooms = useSelector((state: RootState) => state.project.rooms);
  const onKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log(inputText);
      dispatch(getLookUpRoom(inputText));
    }
  };
  // console.log(rooms);
  const handleFindRoom = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputText(e.target.value);
  };
  return (
    <Wrapper>
      <SearchContainer>
        <Tittle>Mời bạn nhập tên phòng cần tìm </Tittle>
        <TextField
          id="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          style={{ width: "300px" }}
          label="Tìm kiếm theo tên phòng"
          variant="outlined"
          onChange={(e) => handleFindRoom(e)}
          onKeyUp={(e) => onKeyUp(e)}
        />
      </SearchContainer>
      <SearchSelect>
        
      </SearchSelect>
    </Wrapper>
  );
}

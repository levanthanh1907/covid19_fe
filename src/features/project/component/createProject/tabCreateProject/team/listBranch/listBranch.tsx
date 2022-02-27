import React from "react";
import Search from "@mui/icons-material/Search";
import styled from "styled-components";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { filter } from "../../../../../../../redux/reducer/projectReducer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  margin-top: 10px;
  gap: 20px;
`;
const ListBranch: React.FC = () => {
  const dispatch = useDispatch();
  const [branch, setBranch] = React.useState("Tất cả");
  const [type, setType] = React.useState("Tất cả");
  const handleChangeBranch = (event: SelectChangeEvent) => {
    setBranch(event.target.value);
    dispatch(filter({ branch: event.target.value, type }));
  };
  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value);
    dispatch(filter({ type: event.target.value, branch }));
  };

  return (
    <Wrapper>
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-standard-label">Lớp</InputLabel>
          <Select
            id="demo-simple-select"
            value={branch}
            onChange={handleChangeBranch}
          >
            <MenuItem value={"Tất cả"}>Tất cả</MenuItem>
            <MenuItem value={0}>None</MenuItem>
            <MenuItem value={1}>Bv1</MenuItem>
            <MenuItem value={2}>bv2</MenuItem>
            <MenuItem value={3}>bv3</MenuItem>
            <MenuItem value={4}>bv4</MenuItem>
            <MenuItem value={5}>bv5</MenuItem>
            <MenuItem value={6}>bv6</MenuItem>
            <MenuItem value={7}>t</MenuItem>
            <MenuItem value={8}>r</MenuItem>
            <MenuItem value={9}>e</MenuItem>
            <MenuItem value={10}>e</MenuItem>
            <MenuItem value={11}>r</MenuItem>
            <MenuItem value={12}>t</MenuItem>
            <MenuItem value={13}>e</MenuItem>
            <MenuItem value={14}>r</MenuItem>
            <MenuItem value={15}>b</MenuItem>
            <MenuItem value={16}>a</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-standard-label">Nhiệm vụ</InputLabel>
          <Select
            id="demo-simple-select"
            value={type}
            onChange={handleChangeType}
          >
            <MenuItem value={"Tất cả"}>Tất cả</MenuItem>
            <MenuItem value={0}>Bác sĩ</MenuItem>
            <MenuItem value={1}>Y tá</MenuItem>
            <MenuItem value={2}>Bệnh nhân</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField
          id="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          style={{ width: "270px" }}
          label="Tìm kiếm theo tên"
          variant="standard"
        />
      </div>
    </Wrapper>
  );
};

export default ListBranch;

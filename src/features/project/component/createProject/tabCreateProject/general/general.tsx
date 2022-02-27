import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { INewProject } from "../../createProject";

const NewGeneral = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormList = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 20px;
`;

const ListName = styled.div`
  width: 120px;
`;
const ListInput = styled.div``;
const CheckboxUser = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div``;
const BtnProjectType = styled(Button)`
  width: 200px;
`;

interface useForm {
  register: UseFormRegister<INewProject>;
  setValue: UseFormSetValue<INewProject>;
}

const General: React.FC<useForm> = ({ register, setValue }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [Active, setActive] = React.useState("Đồ án chuyên ngành");

  return (
    <NewGeneral>
      <FormList>
        <ListName>Tên Phòng</ListName>
        <TextField
          hiddenLabel
          id="outlined-basic"
          variant="outlined"
          placeholder="Tên Phòng"
          {...register("name", { required: true })}
          sx={{
            border: "1px solid rgba(0,0,0,.12)",
            width: "50%",
          }}
        />
      </FormList>
      <FormList>
        <ListName>Loại phòng</ListName>
        <TextField
          hiddenLabel
          id="outlined-basic"
          variant="outlined"
          placeholder="Loại phòng"
          {...register("properties", { required: true })}
          sx={{
            border: "1px solid rgba(0,0,0,.12)",
            width: "30%",
          }}
        />
      </FormList>
      <FormList>
        <ListName>Thời gian tạo phòng</ListName>
        <TextField
          style={{ width: "24%" }}
          type="date"
          {...register("timeStart")}
        />
        <p style={{ padding: "0 5px" }}>to</p>
        <TextField
          style={{ width: "24%" }}
          type="date"
          {...register("timeEnd")}
        />
      </FormList>
      <FormList>
        <ListName>Ghi chú</ListName>
        <ListInput>
          <TextareaAutosize
            {...register("note")}
            minRows={3}
            aria-label="empty textarea"
            style={{ width: 800 }}
          />
        </ListInput>
      </FormList>
      <FormList style={{ paddingBottom: "0" }}>
        <ListName>Tất cả Bệnh nhân</ListName>
        <CheckboxUser>
          <Checkbox {...label} {...register("isAllUserBelongTo")} />
          <Title>
          Tự động thêm bệnh nhân vào phòng khi tạo người dùng là bệnh nhân mới
          </Title>
        </CheckboxUser>
      </FormList>
      <FormList>
        <ListName>Loại bệnh</ListName>
        <Stack spacing={2} direction="row">
          <BtnProjectType
            variant="outlined"
            style={{
              color: "#000",
              background: Active === "Đồ án thực tập" ? "#f36c00" : "#fff",
            }}
            onClick={() => {
              setActive("Đồ án thực tập");
              setValue("projectType", 0);
            }}
          >
            Có triệu chứng mắc covid-19
          </BtnProjectType>
          <BtnProjectType
            variant="outlined"
            style={{
              color: "#000",
              background: Active === "Đồ án chuyên ngành" ? "#f36c00" : "#fff",
            }}
            onClick={() => {
              setActive("Đồ án chuyên ngành");
              setValue("projectType", 1);
            }}
          >
           Tiếp xúc ca nhiễm covid-19
          </BtnProjectType>
          <BtnProjectType
            variant="outlined"
            style={{
              color: "#000",
              background: Active === "Đồ án tốt nghiệp" ? "#f36c00" : "#fff",
            }}
            onClick={() => {
              setActive("Đồ án tốt nghiệp");
              setValue("projectType", 2);
            }}
          >
            Nhiễm covid-19
          </BtnProjectType>
        </Stack>
      </FormList>
    </NewGeneral>
  );
};

export default General;

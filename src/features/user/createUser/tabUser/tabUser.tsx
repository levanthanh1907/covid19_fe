import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { INewUser } from "../createUser";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const NewTask = styled.div`
  display: flex;
  padding: 10px 25px;
  gap: 250px;
`;

const FormCreate = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormLeft = styled.div`
  width: 45%;
`;

const FormRight = styled.div`
  width: 45%;
`;

interface useForm {
  register: UseFormRegister<INewUser>;
  setValue: UseFormSetValue<INewUser>;
}

const TabUser: React.FC<useForm> = ({ register, setValue }) => {
  const [TreatmentHospital, setTreatmentHospital] = React.useState("");
  const handleChangeBranch = (event: SelectChangeEvent) => {
    setTreatmentHospital(event.target.value as string);
  };
  const [sex, setSex] = React.useState("");
  const handleChangeSex = (event: SelectChangeEvent) => {
    setSex(event.target.value as string);
  };

  return (
    <NewTask>
      <FormCreate>
        <FormLeft>
          <TextField
            hiddenLabel
            id="standard-basic"
            variant="standard"
            placeholder="Mời nhập username"
            {...register("userName", { required: true })}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& input": { padding: "10px" },
            }}
          />
          <TextField
            hiddenLabel
            id="standard-basic"
            variant="standard"
            placeholder="Mời nhập password"
            {...register("password", { required: true })}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& input": { padding: "10px" },
            }}
          />
          <TextField
            hiddenLabel
            id="standard-basic"
            variant="standard"
            placeholder="Mời nhập tên"
            {...register("name", { required: true })}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& input": { padding: "10px" },
            }}
          />
          <TextField
            hiddenLabel
            id="standard-basic"
            variant="standard"
            placeholder="Mời nhập avatar"
            {...register("avatarPath", { required: true })}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& input": { padding: "10px" },
            }}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={TreatmentHospital}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& div": { padding: "8px 0" },
            }}
            {...register("TreatmentHospital", { required: true })}
            onChange={handleChangeBranch}
          >
            <MenuItem value={0}>None</MenuItem>
            <MenuItem value={1}>Bệnh viện quân y 103</MenuItem>
            <MenuItem value={2}>Bệnh viện 198 Bộ Công An</MenuItem>
            <MenuItem value={3}>Bệnh viện Phụ sản Trung ương</MenuItem>
            <MenuItem value={4}>Bệnh viện hữu nghị Việt Đức</MenuItem>
            <MenuItem value={5}>Bệnh viện Việt Pháp Hà Nội</MenuItem>
            <MenuItem value={6}>Bệnh viện Bạch Mai</MenuItem>
            <MenuItem value={7}>Bệnh viện đại học Y Hà Nội</MenuItem>
            <MenuItem value={8}>Bệnh viện Chợ Rẫy</MenuItem>
            <MenuItem value={9}>Bệnh viện C Đà Nẵng</MenuItem>
            <MenuItem value={10}>Bệnh viện Y học cổ truyền Trung ương</MenuItem>
            <MenuItem value={11}>Bệnh viện E</MenuItem>
            <MenuItem value={12}>Bệnh viện Trung ương Huế</MenuItem>
            <MenuItem value={13}>Bệnh viện K</MenuItem>
            <MenuItem value={14}>Bệnh viện 74 Trung ương</MenuItem>
            <MenuItem value={15}>Bệnh viện Phổi Trung ương</MenuItem>
            <MenuItem value={16}>Bệnh viện Tâm thần Trung ương 1</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sex}
            {...register("sex", { required: true })}
            onChange={handleChangeSex}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& div": { padding: "8px 0" },
            }}
          >
            <MenuItem value={0}>Nam</MenuItem>
            <MenuItem value={1}>Nữ</MenuItem>
          </Select>
        </FormLeft>
        <FormRight>
        <TextField
            hiddenLabel
            id="standard-basic"
            variant="standard"
            placeholder="Mời nhập email"
            {...register("emailAddress", { required: true })}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& input": { padding: "10px" },
            }}
          />
          <TextField
            hiddenLabel
            id="standard-basic"
            variant="standard"
            placeholder="Mời nhập địa chỉ"
            {...register("address", { required: true })}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& input": { padding: "10px" },
            }}
          />
          <TextField
            hiddenLabel
            id="standard-basic"
            variant="standard"
            placeholder="Mời nhập họ"
            {...register("surname", { required: true })}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& input": { padding: "10px" },
            }}
          />
          <TextField
            hiddenLabel
            id="standard-basic"
            placeholder="Mời nhập lại password"
            variant="standard"
            sx={{
              width: "100%",
              border: "1px solid rgba(0,0,0,.12)",
              marginBottom: "20px",
              padding: "10px 0 0",
            }}
          />
          <TextField
            hiddenLabel
            id="standard-basic"
            variant="standard"
            placeholder="Mời nhập SĐT"
            {...register("phoneNumber", { required: true })}
            sx={{
              border: "1px solid rgba(0,0,0,.12)",
              width: "100%",
              marginBottom: "20px",
              "& input": { padding: "10px" },
            }}
          />
        </FormRight>
      </FormCreate>
    </NewTask>
  );
};

export default TabUser;

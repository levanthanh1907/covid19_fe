import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { uploadFileAction } from "../redux/actions/uploadFileAction";

const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
`;

const BoxInputFile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputFile = styled.input`
  position: relative;
  background-color: #f1f1f1;
  outline: 2px dashed #92b0b3;
  outline-offset: -10px;
  -webkit-transition: outline-offset 0.15s ease-in-out,
    background-color 0.15s linear;
  transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;
  text-align: center !important;
  padding: 12px 25px;
  margin-bottom: 20px;
  :focus {
    outline: 2px dashed #92b0b3;
    outline-offset: -10px;
    -webkit-transition: outline-offset 0.15s ease-in-out,
      background-color 0.15s linear;
    transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;
    border: 1px solid #92b0b3;
  }
  
`;




export default function UploadButtons() {
  const dispatch = useDispatch();
  const [fileSelected, setFileSelected] = React.useState<FileList | null>();
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    setFileSelected(fileList);
  };
  console.log(fileSelected);

  // const handleUploadFile = () => {
  //   if (fileSelected) {
  //     let file = fileSelected[0];
  //     let formData = new FormData();
  //     formData.append("File", file);
  //     dispatch(uploadFileAction(formData));
  //   }
  // };

  return (
    <BoxInputFile>
        <InputFile
          accept="image/*"
          key={""}
          type="file"
          onChange={handleAvatarChange}
        />
      </BoxInputFile>
  );
}
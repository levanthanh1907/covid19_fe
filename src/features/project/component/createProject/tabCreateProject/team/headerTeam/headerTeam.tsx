import {
    Avatar,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
  } from "@mui/material";
  import React, { useState } from "react";
  import styled from "styled-components";
  import ClearIcon from "@mui/icons-material/Clear";
  import { useDispatch } from "react-redux";
  import { removeMember, updateMemberType } from "../../../../../../../redux/reducer/projectReducer";
  import { IUserNotPagging } from "../../../../../../../interfaces/user/userType";
  
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-top: 15px;
  `;
  const LeftViewHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  `;
  const ViewMember = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  `;
  const TextView = styled.div`
    font-size: 15px;
  `;
  
  const StyledTypeOne = styled.div`
    font-weight: 600;
    background: #f44336;
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledTypeTwo = styled.div`
    font-weight: 600;
    background: #4caf50;
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledTypeThree = styled.div`
    padding: 2px 5px;
    font-size: 10px;
    border-radius: 10px;
    background: #2196f3;
    color: #fff;
    font-weight: 600;
  `;
  
  const StyledTypeFour = styled.div`
    font-weight: 600;
    background: #ff9800;
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchOne = styled.div`
    font-weight: 600;
    background-color: rgb(228, 15, 15);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchTwo = styled.div`
    font-weight: 600;
    background-color: rgb(166, 226, 2);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchThree = styled.div`
    padding: 2px 5px;
    font-size: 10px;
    border-radius: 10px;
    background-color: rgb(102, 93, 30);
    color: #fff;
    font-weight: 600;
  `;
  
  const StyledBranchFour = styled.div`
    font-weight: 600;
    background-color: rgb(119, 119, 119);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchFive = styled.div`
    font-weight: 600;
    background-color: rgb(33, 150, 243);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchSix = styled.div`
    font-weight: 600;
    background-color: rgb(137, 207, 240);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchSeven = styled.div`
    font-weight: 600;
    background-color: rgb(49, 140, 231);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchEight = styled.div`
    font-weight: 600;
    background-color: rgb(191, 175, 178);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchNight = styled.div`
    font-weight: 600;
    background-color: rgb(165, 113, 100);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchTen = styled.div`
    font-weight: 600;
    background-color: rgb(59, 47, 47);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchEleven = styled.div`
    font-weight: 600;
    background-color: rgb(164, 198, 57);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchTwelve = styled.div`
    font-weight: 600;
    background-color: rgb(141, 182, 0);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchThirteen = styled.div`
    font-weight: 600;
    background-color: rgb(0, 128, 0);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchfourteen = styled.div`
    font-weight: 600;
    background-color: rgb(241, 156, 187);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchFiveteen = styled.div`
    font-weight: 600;
    background-color: rgb(171, 39, 79);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchSixteen = styled.div`
    font-weight: 600;
    background-color: rgb(229, 43, 80);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const StyledBranchSeventeen = styled.div`
    font-weight: 600;
    background-color: rgb(5, 32, 90);
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  `;
  
  const HeaderTeam: React.FC<{
    selectedMember: IUserNotPagging;
  }> = ({ selectedMember}) => {
    const [memberType, setMemberType] = useState<string>("1");
    const dispatch = useDispatch();
    const handleChangeMemberType = (event: SelectChangeEvent) => {
      setMemberType(event.target.value);
      dispatch(updateMemberType({...selectedMember, type: parseInt(event.target.value)}));
    };
    const handleRemoveMember = (user: IUserNotPagging) => {
      dispatch(removeMember(user));
    };
    return (
      <Wrapper>
        <LeftViewHeader>
          <ClearIcon onClick={() => handleRemoveMember(selectedMember)} />
          <ViewMember>
            <TextView>{selectedMember.fullName}</TextView>
            {selectedMember.TreatmentHospital === 0 ? (
              <StyledBranchOne>None</StyledBranchOne>
              ) : selectedMember.TreatmentHospital === 1 ? (
                <StyledBranchTwo>Bệnh viện quân y 103</StyledBranchTwo>
              ) : selectedMember.TreatmentHospital === 2 ? (
                <StyledBranchThree>Bệnh viện 198 Bộ Công An</StyledBranchThree>
              ) : selectedMember.TreatmentHospital === 3 ? (
                <StyledBranchFour>Bệnh viện Phụ sản Trung ương</StyledBranchFour>
              ) : selectedMember.TreatmentHospital === 4 ? (
                <StyledBranchFive>Bệnh viện hữu nghị Việt Đức</StyledBranchFive>
              ) : selectedMember.TreatmentHospital === 5 ? (
                <StyledBranchSix>Bệnh viện Việt Pháp Hà Nội</StyledBranchSix>
              ) : selectedMember.TreatmentHospital === 6 ? (
                <StyledBranchSeven>Bệnh viện Bạch Mai</StyledBranchSeven>
              ) : selectedMember.TreatmentHospital === 7 ? (
                <StyledBranchEight>Bệnh viện đại học Y Hà Nội</StyledBranchEight>
              ) : selectedMember.TreatmentHospital === 8 ? (
                <StyledBranchNight>Bệnh viện Chợ Rẫy</StyledBranchNight>
              ) : selectedMember.TreatmentHospital === 9 ? (
                <StyledBranchTen>Bệnh viện C Đà Nẵng</StyledBranchTen>
              ) : selectedMember.TreatmentHospital === 10 ? (
                <StyledBranchEleven>Bệnh viện Y học cổ truyền Trung ương</StyledBranchEleven>
              ) : selectedMember.TreatmentHospital === 11 ? (
                <StyledBranchTwelve>Bệnh viện E</StyledBranchTwelve>
              ) : selectedMember.TreatmentHospital === 12 ? (
                <StyledBranchThirteen>Bệnh viện Trung ương Huế</StyledBranchThirteen>
              ) : selectedMember.TreatmentHospital === 13 ? (
                <StyledBranchfourteen>Bệnh viện K</StyledBranchfourteen>
              ) : selectedMember.TreatmentHospital === 14 ? (
                <StyledBranchFiveteen>Bệnh viện 74 Trung ương</StyledBranchFiveteen>
              ) : selectedMember.TreatmentHospital === 15 ? (
                <StyledBranchSixteen>Bệnh viện Phổi Trung ương</StyledBranchSixteen>
              ) : (
                <StyledBranchSeventeen>Bệnh viện Tâm thần Trung ương 1</StyledBranchSeventeen>
              )}
            {selectedMember.type === 0 ? (
              <StyledTypeOne>Bác sĩ</StyledTypeOne>
            ) : selectedMember.type === 1 ? (
              <StyledTypeTwo>Y tá</StyledTypeTwo>
            ) : selectedMember.type === 2 ? (
              <StyledTypeThree>Bệnh nhân</StyledTypeThree>
            ) : null}
          </ViewMember>
        </LeftViewHeader>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <Select
            id="demo-simple-select"
            value={memberType}
            onChange={handleChangeMemberType}
          >
            <MenuItem value={0}>Bác sĩ</MenuItem>
            <MenuItem value={1}>Y tá</MenuItem>
            <MenuItem value={2}>Bệnh nhân</MenuItem>
          </Select>
        </FormControl>
      </Wrapper>
    );
  };
  
  export default HeaderTeam;
  
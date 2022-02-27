import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { pushMember } from "../../../../../../../redux/reducer/projectReducer";
import { IUserNotPagging } from "../../../../../../../interfaces/user/userType";

const Wrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 15px;
  align-items: center;
`;
const View = styled.div`
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

const ListView: React.FC<{ user: IUserNotPagging }> = ({ user }) => {
  const dispatch = useDispatch();
  const handlePushMember = (user: IUserNotPagging) => {
    dispatch(pushMember(user));
  };
  return (
    <Wrapper>
      <AddCircleOutlineIcon
        sx={{ marginLeft: "20px" }}
        onClick={() => handlePushMember(user)}
      />
      <View>
        <TextView>{user.fullName}</TextView>
        {user.TreatmentHospital === 0 ? (
          <StyledBranchOne>None</StyledBranchOne>
        ) : user.TreatmentHospital === 1 ? (
          <StyledBranchTwo>1</StyledBranchTwo>
        ) : user.TreatmentHospital === 2 ? (
          <StyledBranchThree>2</StyledBranchThree>
        ) : user.TreatmentHospital === 3 ? (
          <StyledBranchFour>3</StyledBranchFour>
        ) : user.TreatmentHospital === 4 ? (
          <StyledBranchFive>s</StyledBranchFive>
        ) : user.TreatmentHospital === 5 ? (
          <StyledBranchSix>d</StyledBranchSix>
        ) : user.TreatmentHospital === 6 ? (
          <StyledBranchSeven>f</StyledBranchSeven>
        ) : user.TreatmentHospital === 7 ? (
          <StyledBranchEight>d</StyledBranchEight>
        ) : user.TreatmentHospital === 8 ? (
          <StyledBranchNight>r</StyledBranchNight>
        ) : user.TreatmentHospital === 9 ? (
          <StyledBranchTen>df</StyledBranchTen>
        ) : user.TreatmentHospital === 10 ? (
          <StyledBranchEleven>s</StyledBranchEleven>
        ) : user.TreatmentHospital === 11 ? (
          <StyledBranchTwelve>a</StyledBranchTwelve>
        ) : user.TreatmentHospital === 12 ? (
          <StyledBranchThirteen>a</StyledBranchThirteen>
        ) : user.TreatmentHospital === 13 ? (
          <StyledBranchfourteen>1</StyledBranchfourteen>
        ) : user.TreatmentHospital === 14 ? (
          <StyledBranchFiveteen>2</StyledBranchFiveteen>
        ) : user.TreatmentHospital === 15 ? (
          <StyledBranchSixteen>3</StyledBranchSixteen>
        ) : (
          <StyledBranchSeventeen>6</StyledBranchSeventeen>
        )}
        {user.type === 0 ? (
          <StyledTypeOne>Bác sĩ</StyledTypeOne>
        ) : user.type === 1 ? (
          <StyledTypeTwo>Y tá</StyledTypeTwo>
        ) : user.type === 2 ? (
          <StyledTypeThree>Bệnh nhân</StyledTypeThree>
        ) : null}
      </View>
    </Wrapper>
  );
};

export default ListView;

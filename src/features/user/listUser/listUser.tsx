import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TableHead from "@mui/material/TableHead";
import ActionsUser from "./actionsUser/actionsUser";
import { resetUserProgress, userSelector } from "../../../redux/reducer/userReducer";

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
`;

const TitleContent = styled.div`
  font-size: 14px;
`;

const Common = styled.div`
  padding: 10px 25px;
  gap: 50px;
`;

const TableCommon = styled.div``;

const ListUsers: React.FC = () => {
  const dispatch = useDispatch();
  const progress = useSelector((state: RootState) => state.user.progress);
  useEffect(() => {
    if (progress === "done") {
      dispatch(resetUserProgress());
    }
  }, [progress, dispatch]);

  const users = useSelector(userSelector.getAllUserSelector);

  return (
    <Common>
      <Title>Danh sách ({users.length})</Title>
      <TitleContent>Danh sách người dùng</TitleContent>
      <hr />
      <TableCommon>
        <Table aria-label="simple table" sx={{ border: 0 }}>
          <TableHead>
            <TableRow
              sx={{
                "& th": { border: "1px solid #ccc", background: "#00bcd4", textAlign: "center" },
              }}
            >
              <TableCell scope="row">STT</TableCell>
              <TableCell scope="row">UserName</TableCell>
              <TableCell scope="row">Email</TableCell>
              <TableCell scope="row">Họ và tên</TableCell>
              <TableCell scope="row">Giới tính</TableCell>
              <TableCell scope="row">Địa chỉ</TableCell>
              <TableCell scope="row">SĐT</TableCell>
              <TableCell scope="row">Bệnh viện điều trị</TableCell>
              <TableCell scope="row">Nhiệm vụ</TableCell>
              <TableCell scope="row">Tuỳ chỉnh</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{
                    "& td": { border: "1px solid #ccc" },
                  }}
                >
                  <TableCell scope="row">{index + 1}</TableCell>
                  <TableCell scope="row">{item.userName}</TableCell>
                  <TableCell scope="row">{item.emailAddress}</TableCell>
                  <TableCell scope="row">{item.fullName}</TableCell>
                  {item.sex == 0 ? (
                    <TableCell scope="row">Nam</TableCell>
                  ) : (
                    <TableCell scope="row">Nữ</TableCell>
                  )}
                  <TableCell scope="row">{item.address}</TableCell>
                  <TableCell scope="row">{item.phoneNumber}</TableCell>
                  {item.TreatmentHospital === 1 ? (
                    <TableCell scope="row">Bệnh viện quân y 103</TableCell>
                  ) : item.TreatmentHospital === 2 ? (
                    <TableCell scope="row">Bệnh viện 198 Bộ Công An</TableCell>
                  ) : item.TreatmentHospital === 3 ? (
                    <TableCell scope="row">Bệnh viện Phụ sản Trung ương</TableCell>
                  ) : item.TreatmentHospital === 4 ? (
                    <TableCell scope="row">Bệnh viện hữu nghị Việt Đức</TableCell>
                  ) : item.TreatmentHospital === 5 ? (
                    <TableCell scope="row">Bệnh viện Việt Pháp Hà Nội</TableCell>
                  ) : item.TreatmentHospital === 6 ? (
                    <TableCell scope="row">Bệnh viện Bạch Mai</TableCell>
                  ) : item.TreatmentHospital === 7 ? (
                    <TableCell scope="row">Bệnh viện đại học Y Hà Nội</TableCell>
                  ) : item.TreatmentHospital === 8 ? (
                    <TableCell scope="row">Bệnh viện Chợ Rẫy</TableCell>
                  ) : item.TreatmentHospital === 9 ? (
                    <TableCell scope="row">Bệnh viện C Đà Nẵng</TableCell>
                  ) : item.TreatmentHospital === 10 ? (
                    <TableCell scope="row">Bệnh viện Y học cổ truyền Trung ương</TableCell>
                  ) : item.TreatmentHospital === 11 ? (
                    <TableCell scope="row">Bệnh viện E</TableCell>
                  ) : item.TreatmentHospital === 12 ? (
                    <TableCell scope="row">Bệnh viện Trung ương Huế</TableCell>
                  ) : item.TreatmentHospital === 13 ? (
                    <TableCell scope="row">Bệnh viện K</TableCell>
                  ) : item.TreatmentHospital === 14 ? (
                    <TableCell scope="row">Bệnh viện 74 Trung ương</TableCell>
                  ) : item.TreatmentHospital === 15 ? (
                    <TableCell scope="row">Bệnh viện Phổi Trung ương</TableCell>
                  ) : item.TreatmentHospital === 16 ? (
                    <TableCell scope="row">Bệnh viện Tâm thần Trung ương 1</TableCell>
                  ) : (
                    <TableCell scope="row">None</TableCell>
                  )}
                  <TableCell scope="row">{item.roleNames}</TableCell>
                  <TableCell scope="row">
                    <ActionsUser user={item} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableCommon>
    </Common>
  );
};

export default ListUsers;

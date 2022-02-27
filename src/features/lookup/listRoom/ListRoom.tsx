import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TableHead from "@mui/material/TableHead";
import {
  resetProgress,
  roleSelector,
} from "../../../redux/reducer/roleReducer";
// import ActionsRole from "./actionsRole/actionsRole";

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

export default function ListRoom() {
  //   const dispatch = useDispatch();
  //   const progress = useSelector((state: RootState) => state.role.progress);
  //   useEffect(() => {
  //     if (progress === "done") {
  //       dispatch(resetProgress());
  //     }
  //   }, [progress, dispatch]);

  //   const roles = useSelector(roleSelector.getAllRoleSelector);
  const rooms = useSelector((state: RootState) => state.project.rooms);
  const roomid = useSelector((state: RootState) => state.project.roomId);

  return (
    <Common>
      <Title>Danh sách ({roomid})</Title>
      <TitleContent>Danh sách thành viên trong phòng</TitleContent>
      <hr />
      <TableCommon>
        <Table aria-label="simple table" sx={{ border: 0 }}>
          <TableHead>
            <TableRow
              sx={{
                "& th": { border: "1px solid #ccc", background: "#e9e9e9" },
              }}
            >
              <TableCell scope="row">STT</TableCell>
              <TableCell scope="row">Họ tên</TableCell>
              <TableCell scope="row">Địa chỉ</TableCell>
              <TableCell scope="row">SĐT</TableCell>
              <TableCell scope="row">Giới tính</TableCell>
              <TableCell scope="row">Vai trò</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((item, index) => (
              <TableRow
                //   key={index}
                sx={{
                  "& td": { border: "1px solid #ccc" },
                }}
                key={index}
              >
                <TableCell scope="row">{index + 1}</TableCell>
                <TableCell scope="row">{item.fullName}</TableCell>
                <TableCell scope="row">{item.address}</TableCell>
                <TableCell scope="row">{item.phoneNumber}</TableCell>
                {item.sex == 0 ? (
                  <TableCell scope="row">Nam</TableCell>
                ) : (
                  <TableCell scope="row">Nữ</TableCell>
                )}
                <TableCell scope="row">{item.roleNames}</TableCell>
              </TableRow>
            ))}
            {/* {roles.map((item, index) => { */}
            {/* return ( */}
            {/* );
            })} */}
          </TableBody>
        </Table>
      </TableCommon>
    </Common>
  );
}

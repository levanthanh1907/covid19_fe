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

const Notification = styled.div`
  display: flex;
  justify-content: center;
`;
const TextNoti = styled.div`
  font-size: 20px;
  color: red;
`;

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

  const renderTabPannel = () => {
    if (rooms !== undefined) {
      return rooms.map((item, index) => {
        return (
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
              <TableCell scope="row">N???</TableCell>
            )}
            <TableCell scope="row">{item.roleNames}</TableCell>
          </TableRow>
        );
      });
    } else {
      return (
        <Notification>
          <TextNoti>Ph??ng kh??ng ???????c t??m th???y</TextNoti>
        </Notification>
      );
    }
  };
  return (
    <Common>
      <Title>Danh s??ch ({roomid})</Title>
      <TitleContent>Danh s??ch th??nh vi??n trong ph??ng</TitleContent>
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
              <TableCell scope="row">H??? t??n</TableCell>
              <TableCell scope="row">?????a ch???</TableCell>
              <TableCell scope="row">S??T</TableCell>
              <TableCell scope="row">Gi???i t??nh</TableCell>
              <TableCell scope="row">Vai tr??</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderTabPannel()}</TableBody>
        </Table>
      </TableCommon>
    </Common>
  );
}

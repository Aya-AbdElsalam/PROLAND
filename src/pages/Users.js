import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Stack } from "@mui/material";
import { Group } from "@mui/icons-material";
import { fetchUsers } from "../rtk/slices/UsersSlice";
import TableUsers from "../component/Grid/userTable";

export default function Users() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector((state) => {
    return state.usersSlices.users;
  });

  const rows = [
    users.map((t) => {
      return {
        id: t.id,
        fullName: t.Name,
        phone: t.phone,
        email: t.email,
        country: t.country,
        TotalBuy: t.TotalBuy,
      };
    }),
  ];
  return (
    <Container>
      <Box
        fontWeight={"bold"}
        fontSize={"25px"}
        sx={{ borderBottom: "3px solid", marginBottom: "20px" }}
      >
        <Group sx={{ marginRight: "10px", fontSize: "30px" }} />
        {`USERS`}
      </Box>
      <Stack direction={"row"}>
        <Box width={"1000px"} flex={1}>
          <TableUsers rows={rows[0]} />
        </Box>
      </Stack>
    </Container>
  );
}

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Stack } from "@mui/material";
import { History } from "@mui/icons-material";
import { fetchOrders } from "../rtk/slices/UsersSlice";
import OrdersTable from "../component/Grid/OrderTable";
export default function Orders() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  const orders = useSelector((state) => {
    return state.usersSlices.orders;
  });

  const rows = [
    orders.map((t) => {
      return {
        id: t.id,
        Customer: t.Customer,
        Email: t.Email,
        Phone: t.Phone,
        item: t.item,
        price: t.price,
        date: t.date,
        status: t.status,
        payment: t.payment,
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
        <History sx={{ marginRight: "10px", fontSize: "30px" }} />
        {`ORDERS HISTORY`}
      </Box>
      <Stack direction={"row"}>
        <Box width={"1000px"} flex={1}>
          <OrdersTable rows={rows[0]} />
        </Box>
      </Stack>
    </Container>
  );
}

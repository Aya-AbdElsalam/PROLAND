import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Table from "./Table";
export default function OrdersTable({ rows }) {
  const loading = useSelector((state) => {
    return state.usersSlices.loading_orders;
  });
  const columns = [
    { overFlow: "none", field: "id", headerName: "ID", width: 50 },
    {
      field: "Customer",
      headerName: "Customer",
      flex: 1,
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "item",
      headerName: "Item",
      flex: 1.5,
    },
    {
      width: 30,
      field: "price",
      headerName: "Price",
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: status }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                status.status === "DELIVERED" ? "var(--bg--second)" : "black",
              color: "white",
              width: "100%",
              textAlign: "center",
              padding: "5px",
              borderRadius: "15px",
            }}
          >
            {status.status}
          </Box>
        );
      },
    },
    {
      field: "payment",
      headerName: "Payment",
    },
  ];
  return <Table rows={rows} columns={columns} loading={loading} />;
}

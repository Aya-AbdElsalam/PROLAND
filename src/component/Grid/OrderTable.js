import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
export default function OrdersTable({ rows }) {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
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
      flex: 1,
    },
    {
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
                status.status == "DELIVERED" ? "var(--bg--second)" : "black",
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
      flex: 1,
    },
  ];
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      slots={{
        toolbar: GridToolbar,
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
    />
  );
}

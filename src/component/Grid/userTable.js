import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
export default function TableUsers({ rows }) {
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "fullName",
      headerName: "Full name",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "TotalBuy",
      headerName: "Total Buy",
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

import { Box, Skeleton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function Table(props) {
  return props.loading ? (
    <DataGrid
      rows={props.rows}
      columns={props.columns}
      slots={{
        toolbar: GridToolbar,
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 7,
          },
        },
      }}
      pageSizeOptions={[7]}
    />
  ) : (
    <Box sx={{ width: "100%" }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

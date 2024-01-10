import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Container, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { GridToolbar } from "@mui/x-data-grid";
import { Edit, Loyalty, Queue } from "@mui/icons-material";
import { deleteProducts, fetchProducts } from "../rtk/slices/productsSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const products = useSelector((state) => {
    return state.productsSlice;
  });
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "IMG",
      renderCell: ({ row: img }) => {
        return (
          <Box
            sx={{
              backgroundImage: `url(${img.img})`,
              width: "100%",
              height: " 100%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        );
      },
    },
    {
      field: "Title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "Price",
      headerName: "Price",
    },
    {
      field: "Description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "",
      headerName: "ACTIONS",
      flex: 1,

      renderCell: ({ row: id }) => {
        return (
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{ color: "red", border: "1px solid red" }}
              startIcon={<DeleteIcon />}
              onClick={() => {
                dispatch(deleteProducts(id.id));
              }}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              endIcon={<Edit />}
              onClick={() => {
                navigate(`edit/${id.id}`);
              }}
            >
              Edit
            </Button>
          </Stack>
        );
      },
    },
  ];
  const rows = [
    products.map((t) => {
      return {
        id: t.id,
        img: t.img,
        Title: t.title,
        Price: t.price,
        Description: t.description,
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
        <Loyalty sx={{ marginRight: "10px", fontSize: "30px" }} />
        {`PRODUCTS`}
      </Box>
      <Stack direction={"row"}>
        <Box width={"1000px"} flex={1}>
          <DataGrid
            rows={rows[0]}
            columns={columns}
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
        </Box>
      </Stack>

      <Button
        sx={{ marginY: "20px" }}
        variant="outlined"
        endIcon={<Queue />}
        onClick={() => {
          navigate(`AddProduct`);
        }}
      >
        Add Product
      </Button>
    </Container>
  );
}

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Title from "../Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../rtk/slices/productsSlice";
import { useForm } from "react-hook-form";
import { Close } from "@mui/icons-material";

export default function ProductsItems() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const products = useSelector((state) => {
    return state.productsSlice;
  });
  const [item, setItem] = useState({});
  const [popOver, setPopover] = useState(false);
  const [order, setOrder] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Stack
        display={popOver === true ? "flex" : "none"}
        position={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        zIndex={5000}
        sx={{ background: "#0000009c" }}
      >
        <Stack
          gap={5}
          direction={"row"}
          flexWrap={"wrap"}
          overflow={"scroll"}
          sx={{ background: "white", width: { xs: "100%", sm: "80%" } }}
          height={{ sm: "600px", xs: "96%" }}
          justifyContent={"center"}
          padding={"15px"}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            left={0}
            top={"0"}
            sx={{
              background: "red",
              width: "50px",
              textAlign: "center",
              height: "50px",
              borderRadius: "0 15px",
              lineHeight: "60px",
              cursor: "pointer",
            }}
            onClick={() => {
              setOrder(false);
              setPopover(false);
            }}
          >
            <Close
              sx={{ color: "white", fontWeight: "bold", fontSize: "30px" }}
            />
          </Box>
          <Box
            width={"300px"}
            flexGrow={1}
            textAlign={"center"}
            height={{ md: "100%", xs: "390px" }}
          >
            <img
              loading="lazy"
              alt=""
              src={item.img}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            flexGrow={2}
            padding={"35px"}
            overflow={"hidden"}
            width={"333px"}
            sx={{
              backgroundColor: "var(--bg--main)",
              textWrap: "nowrap",
            }}
          >
            <Stack
              gap={5}
              width={"100%"}
              display={"inline-flex"}
              position={"relative"}
              marginLeft={order === true ? "-200%" : "0"}
              sx={{ textWrap: "wrap", transition: "all 3s ease" }}
            >
              <Box>
                <Typography color={"var(--p--main)"}> SMART WATCH</Typography>
                <Typography variant="h4" fontWeight={"bold"}>
                  {item.title}
                </Typography>
                <Typography color={"var(--p--main)"}> {item.model}</Typography>
                <Typography
                  variant="h4"
                  color={"var(--bg--second)"}
                  fontWeight={"bold"}
                >
                  ${item.price}
                </Typography>
              </Box>

              <Typography
                color={"var(--p--main)"}
                borderBottom={"1px solid var(--p--main)"}
                borderTop={"1px solid var(--p--main)"}
                paddingY={"50px"}
              >
                {item.longDes ? item.longDes : item.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--bg--second)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  paddingY: "20px",
                }}
                onClick={() => {
                  setOrder(true);
                }}
              >
                PRE-ORDER NOW
              </Button>
            </Stack>
            <Stack
              sx={{ textWrap: "wrap" }}
              gap={5}
              width={"100%"}
              display={"inline-flex"}
              position={"relative"}
              alignItems={"center"}
              marginLeft={order === true ? "100%" : "-500%"}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "var(--p--main)",
                  fontSize: "15px",
                  width: "150px",
                  borderRadius: "50px",
                  borderColor: "var(--p--main)",
                }}
                onClick={() => {
                  setOrder(false);
                }}
              >
                GO BACK
              </Button>
              <Box component={"form"} onSubmit={handleSubmit()}>
                <TextField
                  {...register("firstName", { required: true, minLength: 3 })}
                  helperText={
                    errors.firstName && "Invalid value ... min length equal 3"
                  }
                  error={errors.firstName}
                  fullWidth
                  label="Name"
                  variant="outlined"
                  sx={{ my: "8px" }}
                />
                <TextField
                  {...register("Conatct", {
                    required: true,
                    pattern:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  })}
                  helperText={errors.Conatct && "Invalid Phone Number"}
                  error={errors.Conatct}
                  fullWidth
                  label="Phone"
                  sx={{ my: "8px" }}
                  variant="outlined"
                />
                <TextField
                  {...register("email", {
                    required: true,
                    pattern:
                      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  })}
                  helperText={errors.email && "Invalid Email"}
                  error={errors.email}
                  fullWidth
                  label="Email"
                  variant="outlined"
                  sx={{ my: "8px" }}
                />
                <TextField
                  {...register("Country", { required: true, minLength: 3 })}
                  helperText={
                    errors.Country && "Invalid value ... min length equal 3"
                  }
                  error={errors.Country}
                  fullWidth
                  label="Country"
                  sx={{ my: "8px" }}
                  variant="outlined"
                />
                <TextField
                  {...register("Address", { required: true, minLength: 3 })}
                  helperText={
                    errors.Address && "Invalid value ... min length equal 3"
                  }
                  error={errors.Address}
                  fullWidth
                  label="Address"
                  sx={{ my: "8px" }}
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "var(--bg--second)",
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                    paddingY: "20px",
                  }}
                >
                  FINISH PURCHASE
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Container sx={{ textAlign: "center", my: "80px", position: "relative" }}>
        <Title
          title={"OUR COLLECTION"}
          mx={true}
          p={
            "You are unique. You have unique style and you need a unique watch for you. Choose from our collection of watches."
          }
        />
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={3}
          my={5}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "space-between",
          }}
        >
          {products.map((p) => {
            return (
              <Card
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={p.id}
              >
                <Box sx={{ height: 220 }} image={p.img}>
                  <img
                    src={p.img}
                    height={"100%"}
                    width={"100%"}
                    alt=""
                    loading="lazy"
                  />
                </Box>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color={"var(--bg--second)"}
                  >
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="var(--p--main)">
                    {p.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={"bold"}
                    color="red"
                    fontSize={"20px"}
                    sx={{ my: "10px" }}
                  >
                    ${p.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ flexGrow: "1", alignItems: "flex-end" }}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      setPopover(true);
                      setItem(p);
                    }}
                  >
                    CHOOSE
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Stack>
      </Container>
    </>
  );
}

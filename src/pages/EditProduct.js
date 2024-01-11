import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
export default function EditProducts() {
  let { id } = useParams();
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [model, setModel] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(` https://prolanddata.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setImg(data.img);
        setPrice(data.price);
        setLoading(true);
      });
  }, []);
  function editProduct(e) {
    e.preventDefault();
    fetch(` https://prolanddata.onrender.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        id,
        title,
        description,
        price,
        model,
      }),
    })
      .then((res) => res.json())
      .then(
        setTimeout(() => {
          navigate("../products");
        }, 3000)
      );
  }

  const inoutRef = useRef(null);
  const handleChangeFile = () => {
    inoutRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (p) => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Box
          fontWeight={"bold"}
          fontSize={"25px"}
          sx={{ borderBottom: "3px solid" }}
        >
          <EditIcon sx={{ marginRight: "10px", fontSize: "30px" }} />
          {`EDIT PRODUCT/ ${id}`}
        </Box>
        <Stack direction={"row"} marginY={"50px"} gap={5} flexWrap={"wrap"}>
          <Box onClick={handleChangeFile} width={"263px"} height={"263px"}>
            {loading ? (
              <>
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "17px",
                  }}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={inoutRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <Skeleton variant="rectangular" width={210} height={200} />
            )}
          </Box>
          <Box sx={{ width: "100%" }}>
            {loading ? (
              <form>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    label="Title"
                    value={title}
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onInput={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <TextField
                    sx={{ marginY: "15px" }}
                    fullWidth
                    label="Description"
                    value={description}
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onInput={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <TextField
                    sx={{ marginY: "15px" }}
                    fullWidth
                    required
                    label="MODEL"
                    value={model}
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onInput={(e) => {
                      setModel(e.target.value);
                    }}
                  />
                  <TextField
                    sx={{ marginY: "15px" }}
                    fullWidth
                    label="Price"
                    value={price}
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onInput={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="outlined"
                      type="submit"
                      onClick={(e) => {
                        editProduct(e);
                      }}
                    >
                      sumbit
                    </Button>
                    <Button
                      sx={{ color: "red", borderColor: "red" }}
                      variant="outlined"
                      type="cancel"
                      onClick={() => {
                        navigate("../products");
                      }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </FormControl>
              </form>
            ) : (
              <Box sx={{ width: "100%" }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import { Queue } from "@mui/icons-material";
export default function AddProducts() {
  const [id, setId] = useState();
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  useEffect(() => {}, []);
  function addProduct(e) {
    e.preventDefault();
    fetch(` https://prolanddata.onrender.com/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        id,
        title,
        description,
        price,
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
          <Queue sx={{ marginRight: "10px", fontSize: "30px" }} />
          {`ADD PRODUCT`}
        </Box>
        <Stack direction={"row"} marginY={"50px"} gap={5} flexWrap={"wrap"}>
          <Box
            onClick={handleChangeFile}
            width={"263px"}
            height={"263px"}
            fontWeight={"bold"}
            sx={{ cursor: "pointer" }}
          >
            <img
              loading="lazy"
              src={img}
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "17px" }}
            />
            UPLOAD IMG
            <input
              type="file"
              accept="image/*"
              ref={inoutRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <form>
              <FormControl fullWidth>
                <TextField
                  sx={{ marginY: "15px" }}
                  fullWidth
                  required
                  label="ID"
                  value={id}
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onInput={(e) => {
                    setId(e.target.value);
                  }}
                />
                <TextField
                  fullWidth
                  required
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
                  required
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
                  sx={{ marginBottom: "15px" }}
                  fullWidth
                  required
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
                      addProduct(e);
                    }}
                  >
                    sumbit
                  </Button>
                  <Button
                    sx={{ color: "red", borderColor: "red" }}
                    variant="outlined"
                    onClick={() => {
                      navigate("../products");
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </FormControl>
            </form>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

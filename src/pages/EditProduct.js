import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
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

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setImg(data.img);
        setPrice(data.price);
      });
  }, []);
  function editProduct() {
    fetch(`http://localhost:5000/products/${id}`, {
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
      }),
    })
      .then((res) => res.json())
      .then(navigate("../products"));
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
            <img
              src={img}
              alt=""
              loading="lazy"
              style={{ width: "100%", height: "100%", borderRadius: "17px" }}
            />
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
                    onClick={() => {
                      editProduct();
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
          </Box>
        </Stack>
      </Container>
    </>
  );
}

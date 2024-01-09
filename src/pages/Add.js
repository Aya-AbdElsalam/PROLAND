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
import { PersonAddAlt1 } from "@mui/icons-material";
export default function Add() {
  const [id, setId] = useState();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [jopTitle, setTitle] = useState();
  const [age, setAge] = useState();

  useEffect(() => {}, []);
  function editMember() {
    fetch(`http://localhost:5000/team`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        id,
        name,
        jopTitle,
        age,
      }),
    })
      .then((res) => res.json())
      .then(navigate("../team"));
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
          <PersonAddAlt1 sx={{ marginRight: "10px", fontSize: "30px" }} />
          {`ADD MEMBER`}
        </Box>
        <Stack direction={"row"} marginY={"50px"} gap={5} flexWrap={"wrap"}>
          <Box
            onClick={() => {
              handleChangeFile();
            }}
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
                  fullWidth
                  label="ID"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onInput={(e) => {
                    setId(e.target.value);
                  }}
                />
                <TextField
                  sx={{ marginY: "15px" }}
                  fullWidth
                  label="Name"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onInput={(e) => {
                    setName(e.target.value);
                  }}
                />
                <TextField
                  sx={{ marginY: "15px" }}
                  fullWidth
                  label="Jop Description"
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
                  label="age"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onInput={(e) => {
                    setAge(e.target.value);
                  }}
                />
                <Stack direction={"row"} gap={2}>
                  <Button
                    variant="outlined"
                    type="submit"
                    onClick={() => {
                      editMember();
                    }}
                  >
                    submit
                  </Button>
                  <Button
                    sx={{ color: "red", borderColor: "red" }}
                    variant="outlined"
                    type="cancel"
                    onClick={() => {
                      navigate("../team");
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

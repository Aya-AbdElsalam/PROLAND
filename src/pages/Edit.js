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
export default function Edit() {
  let { id } = useParams();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [jopTitle, setTitle] = useState();
  const [age, setAge] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(` https://prolanddata.onrender.com/team/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAge(data.age);
        setName(data.name);
        setImg(data.img);
        setTitle(data.jopTitle);
        setLoading(true);
      });
  }, []);
  function editMember(e) {
    e.preventDefault();
    fetch(` https://prolanddata.onrender.com/team/${id}`, {
      method: "PUT",
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
      .then(
        setTimeout(() => {
          navigate("../team");
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
          {`EDIT TEAM/ ${id}`}
        </Box>
        <Stack direction={"row"} marginY={"50px"} gap={5} flexWrap={"wrap"}>
          <Box
            onClick={() => {
              handleChangeFile();
            }}
            width={"263px"}
            height={"263px"}
          >
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
                    label="Name"
                    value={name}
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
                    value={jopTitle}
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
                    label="Age"
                    value={age}
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
                      onClick={(e) => {
                        editMember(e);
                      }}
                    >
                      sumbit
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

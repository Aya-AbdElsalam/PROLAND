import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Title from "../Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchteam } from "../../rtk/slices/teamSlice";

export default function Team() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchteam());
  }, [dispatch]);
  const team = useSelector((state) => {
    return state.teamSlice;
  });

  return (
    <Container sx={{ textAlign: "center", my: "80px" }}>
      <Title
        title={"MEET THE TEAM"}
        mx={true}
        p={
          "We are a small group of inverntors, hackers and designers from the differrent parts of the world on a mission."
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
        {team.map((p) => {
          return (
            <Card
              sx={{
                width: "250px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={p.id}
            >
              <Box sx={{ height: 250 }} image={p.img}>
                <img
                  src={p.img}
                  height={"100%"}
                  width={"100%"}
                  alt=""
                  loading="lazy"
                />
              </Box>

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {p.name}
                </Typography>
                <Typography variant="body2" color="var(--p--main)">
                  {p.jopTitle}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
}

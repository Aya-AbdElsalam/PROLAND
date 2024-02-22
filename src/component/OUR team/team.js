import {
  Box,
  Card,
  CardContent,
  Container,
  Skeleton,
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
    return state.teamSlice.team;
  });
  const loading = useSelector((state) => {
    return state.teamSlice.loading;
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
        {(loading ? team : Array.from(new Array(3))).map((p, index) => (
          <Card
            sx={{
              width: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={index}
          >
            <Box sx={{ height: 250 }}>
              {loading ? (
                <img
                  src={p.img}
                  height={"100%"}
                  width={"100%"}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
            </Box>

            <CardContent>
              <Typography
                gutterBottom
                fontSize={"20px"}
                component="div"
                width={loading ? "auto" : "200px"}
                height={loading ? "auto" : "50px"}
              >
                {loading ? p.name : <Skeleton width={"100%"} />}
              </Typography>
              <Typography variant="body2" color="var(--p--main)">
                {loading ? p.jopTitle : <Skeleton width={"100%"} />}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

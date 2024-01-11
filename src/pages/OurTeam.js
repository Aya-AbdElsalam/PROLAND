import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteteam, fetchteam } from "../rtk/slices/teamSlice";
import { Box, Container, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Diversity3, Edit, PersonAddAlt1 } from "@mui/icons-material";
import Table from "../component/Grid/Table";

export default function OurTeam() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchteam());
  }, [dispatch]);
  const team = useSelector((state) => {
    return state.teamSlice.team;
  });
  const loading = useSelector((state) => {
    return state.teamSlice.loading;
  });
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
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
      field: "fullName",
      headerName: "Full name",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
    },
    {
      field: "jop",
      headerName: "Jop Describtion",
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
                dispatch(deleteteam(id.id));
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
    team.map((t) => {
      return {
        id: t.id,
        img: t.img,
        fullName: t.name,
        age: t.age,
        jop: t.jopTitle,
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
        <Diversity3 sx={{ marginRight: "10px", fontSize: "30px" }} />
        {`OUR TEAM`}
      </Box>
      <Stack direction={"row"}>
        <Box width={"1000px"} flex={1}>
          <Table rows={rows[0]} columns={columns} loading={loading} />;
        </Box>
      </Stack>
      <Button
        sx={{ marginY: "20px" }}
        variant="outlined"
        endIcon={<PersonAddAlt1 />}
        onClick={() => {
          navigate(`AddMember`);
        }}
      >
        Add Member
      </Button>
    </Container>
  );
}

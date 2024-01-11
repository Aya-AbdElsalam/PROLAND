import { useSelector } from "react-redux";
import Table from "./Table";
export default function TableUsers({ rows }) {
  const loading = useSelector((state) => {
    return state.usersSlices.loading_users;
  });
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "fullName",
      headerName: "Full name",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "TotalBuy",
      headerName: "Total Buy",
      flex: 1,
    },
  ];

  return <Table rows={rows} columns={columns} loading={loading} />;
}

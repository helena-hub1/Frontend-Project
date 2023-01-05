import { useSelector } from "react-redux";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { ListItem } from "@mui/material";

import { RootState } from "../../../redux/store";

// MUI grid column definition
const columns: GridColDef[] = [
  {
    field: "attributeFlag",
    headerName: "Flag",
    width: 100,
    editable: false,
    valueGetter: (params) => {
      return params.getValue(params.id, "flags").png;
    },
    renderCell: (params) => {
      return (
        <>
          <img src={params.value} height="30" />
        </>
      );
    },
  },
  {
    field: "attributeName",
    headerName: "Name",
    valueGetter: (params) => {
      return params.getValue(params.id, "name").common;
    },
    width: 300,
    editable: true,
  },
  {
    field: "region",
    headerName: "Region",
    width: 150,
    editable: true,
  },
  {
    field: "population",
    headerName: "Population",
    width: 150,
    editable: true,
  },
  {
    field: "attributeName",
    headerName: "Languages",
    width: 150,
    editable: true,
    // get the language attribute value
    valueGetter: (params) => {
      return Object.values(params.getValue(params.id, "languages"));
    },
  },
];

const FavoriteList = () => {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  // render
  return (
    <Box sx={{ height: 500, width: "80%", mt: 5 }}>
      <DataGrid
        rows={favoriteList}
        columns={columns}
        getRowId={(row) => row.name.common}
        pageSize={15}
        rowsPerPageOptions={[15]}
        sx={{ ml: 40 }}
      />
    </Box>
  );
};
export default FavoriteList;

import { useSelector } from "react-redux";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import { RootState } from "../../../redux/store";

//column definition
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
          <img src={params.value} alt="flag" height="30" />
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
    editable: false,
  },
  {
    field: "region",
    headerName: "Region",
    width: 150,
    editable: false,
  },
  {
    field: "population",
    headerName: "Population",
    width: 150,
    editable: false,
  },
  {
    field: "attributeLanguage",
    headerName: "Languages",
    width: 150,
    editable: false,
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
    <div className="favorite_list">
      <Typography variant="h5" sx={{ textAlign: "center", mt: 14 }}>
        Favorite Country List
      </Typography>
      <Box sx={{ height: 400, width: "80%", mt: 5, minHeight: 300 }}>
        <DataGrid
          rows={favoriteList}
          columns={columns}
          getRowId={(row) => row.name.common}
          pageSize={15}
          rowsPerPageOptions={[15]}
          sx={{ ml: 13, width: "100%" }}
        />
      </Box>
    </div>
  );
};
export default FavoriteList;

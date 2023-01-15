import { useSelector } from "react-redux";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import { RootState } from "../../../redux/store";

const columns: GridColDef[] = [
  {
    field: "attributeFlag",
    headerName: "Flag",
    width: 100,
    valueGetter: (params) => {
      return params.getValue(params.id, "flags").png;
    },
    renderCell: (params) => {
      return (
        <>
          <img src={params.value} alt="flag" height="30" width="50" />
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
    width: 150,
    editable: false,
  },
  {
    field: "region",
    headerName: "Region",
    width: 150,
  },
  {
    field: "population",
    headerName: "Population",
    width: 150,
  },
  {
    field: "attributeLanguage",
    headerName: "Languages",
    width: 250,

    valueGetter: (params) => {
      return Object.values(params.getValue(params.id, "languages"));
    },
  },
];

const FavoriteList = () => {
  // state
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  // render
  return (
    <div className="favorite_list">
      <Typography variant="h5" sx={{ textAlign: "center", mt: 14 }}>
        Favorite Country List
      </Typography>
      <Box sx={{ height: 500, width: "80%", mt: 5, ml: 13 }}>
        <DataGrid
          rows={favoriteList}
          columns={columns}
          getRowId={(row) => row.name.common}
          pageSize={15}
          rowsPerPageOptions={[15]}
          sx={{ width: 800, height: 500 }}
        />
      </Box>
    </div>
  );
};
export default FavoriteList;

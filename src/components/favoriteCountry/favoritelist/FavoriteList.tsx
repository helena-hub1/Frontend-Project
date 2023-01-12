import { useSelector } from "react-redux";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import { RootState } from "../../../redux/store";

const columns: GridColDef[] = [
  {
    field: "attributeFlag",
    headerName: "Flag",
    width: 150,
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
    width: 150,

    valueGetter: (params) => {
      return Object.values(params.getValue(params.id, "languages"));
    },
  },
];

const FavoriteList = () => {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  return (
    <div className="favorite_list">
      <Typography variant="h5" sx={{ textAlign: "center", mt: 14 }}>
        Favorite Country List
      </Typography>
      <Box sx={{ height: 400, width: "100%", mt: 5 }}>
        <DataGrid
          rows={favoriteList}
          columns={columns}
          getRowId={(row) => row.name.common}
          pageSize={15}
          rowsPerPageOptions={[15]}
          sx={{ ml: 20, width: 700 }}
        />
      </Box>
    </div>
  );
};
export default FavoriteList;

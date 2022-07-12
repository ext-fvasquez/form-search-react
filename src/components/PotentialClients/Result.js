import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  { field: 'firstName', headerName: 'First name', width: 100 },
  { field: 'lastName', headerName: 'Last name', width: 100 },
  { field: 'birthDay', headerName: 'BirthDay', width: 95 },
  { field: 'gender', headerName: 'Gender', width: 90 },
  { field: 'cellphone', headerName: 'Cellphone', width: 120 },
  { field: 'addressHome', headerName: 'Address Home', width: 300 },
  { field: 'profession', headerName: 'Profession', width: 150 },
  { field: 'incomes', headerName: 'Incomes', width: 80 },
];

export default function Result({rows}) {
  return (
    <Box sx={{mt: 2, height: 400}}>
      <Typography variant="h5" margin={2}>Resultados de Búsqueda</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}

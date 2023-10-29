import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Product', width: 90 },
  {
    field: 'imgLink',
    headerName: 'Image Link',
    width: 150,
    editable: true,
  },
  {
    field: 'dataLink',
    headerName: 'Data Link',
    width: 150,
    editable: true,
  },
  {
    field: 'desc',
    headerName: 'Description',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, imgLink: 'Snow', dataLink: 'Jon', desc: 35 },
  { id: 2, imgLink: 'Lannister', dataLink: 'Cersei', desc: 42 },
  { id: 3, imgLink: 'Lannister', dataLink: 'Jaime', desc: 45 },
  { id: 4, imgLink: 'Stark', dataLink: 'Arya', desc: 16 },
  { id: 5, imgLink: 'Targaryen', dataLink: 'Daenerys', desc: null },
  { id: 6, imgLink: 'Melisandre', dataLink: null, desc: 150 },
  { id: 7, imgLink: 'Clifford', dataLink: 'Ferrara', desc: 44 },
  { id: 8, imgLink: 'Frances', dataLink: 'Rossini', desc: 36 },
  { id: 9, imgLink: 'Roxie', dataLink: 'Harvey', desc: 65 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        sx ={{
          border: 2,
          Color: 'white',
          borderColor: 'white',          
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

const styles = {
  mainPage: {
    width: '100vw',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productHeader: {
    position: 'absolute',
    left: '50px',
    top: '80px',
  },
  medImage: {
    width: '375px',
    height: '300px',
  },
  chart: {
    width: '95%',
    height: '95%',
  },
  chartBkg: {
    width: '45vw',
    height: '45vh',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '7vw',
  },
  whitebkg: {
    width: '30vw',
    height: '45vh',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '7vw',
    marginRight: '8vw'
  },
  bigDescription: {
    width: '99vw',
    height: '45vh',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  blackTxt: {
    color: '#000000'
  },
  descTxt: {
    color: '#000000',
    padding: '8px'
  }

}
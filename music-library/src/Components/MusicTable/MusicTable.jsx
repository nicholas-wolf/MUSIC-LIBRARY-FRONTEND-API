import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';







export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Album</TableCell>
            <TableCell align="right">Release Date</TableCell>
            <TableCell align="right">Genre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.parentEntries.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.artist}</TableCell>
              <TableCell align="right">{row.album}</TableCell>
              <TableCell align="right">{row.release_date}</TableCell>
              <TableCell align="right">{row.genre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

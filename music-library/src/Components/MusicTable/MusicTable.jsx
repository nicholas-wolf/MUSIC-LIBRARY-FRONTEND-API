import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';
import BasicModal from '../UpdateSong/UpdateSong';

export default function BasicTable({songs, setCheck}) {
    
    
    function DeleteSong (id){
        let address = 'http://localhost:8000/api/music/'+ id + '/'
        axios({
            method: 'delete',
            url: address
          }).then(response =>{
            if(response.status === 204){
                setCheck(true)
            }
          })      
    }
    

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
          {songs.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.artist}</TableCell>
              <TableCell align="right">{row.album}</TableCell>
              <TableCell align="right">{row.release_date}</TableCell>
              <TableCell align="right">{row.genre}</TableCell>
              <td>
                <div>
                    <Button
                        size="extra small"
                        style={{maxHeight:'20px'}}
                        variant='contained'
                        color='primary'
                        onClick={() => DeleteSong(row.id)}>
                            Delete</Button>
                    <BasicModal 
                        setCheck={setCheck}
                        rowId={row.id}
                        rowTitle={row.title}
                        rowArtist={row.artist}
                        rowAlbum={row.album}
                        rowReleaseDate={row.release_date}
                        rowGenre={row.genre}
                        
                    />
                </div>  
            </td> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

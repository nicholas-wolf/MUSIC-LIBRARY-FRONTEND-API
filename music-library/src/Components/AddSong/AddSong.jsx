import React, { useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { FormControl } from '@mui/material';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';


const AddSong = (props) => {

    const [id, setId] = useState(props.rowId || null)
    const [title, setTitle] = useState(props.rowTitle || null)
    const [artist, setArtist] = useState(props.rowArtist || null)
    const [album, setAlbum] = useState(props.rowAlbum || null)
    const [releaseDate, setReleaseDate] = useState(props.rowReleaseDate  || null)
    const [genre, setGenre] = useState(props.rowGenre || null)

    
    const addNewSong = async () => {
        let formField = new FormData()
        formField.append('title',title)
        formField.append('artist',artist)
        formField.append('album',album)
        formField.append('release_date',releaseDate)
        formField.append('genre',genre)



        await axios({
          method: 'post',
          url:'http://localhost:8000/api/music/',
          data: formField
        }).then(async response=>{
          if(response.status === 201){
              props.setCheck(true)
          }
          
        })
    }

    function EditSong (id){
        let formField = new FormData()
        formField.append('title',title)
        formField.append('artist',artist)
        formField.append('album',album)
        formField.append('release_date',releaseDate)
        formField.append('genre',genre)
    
        let address = 'http://localhost:8000/api/music/'+ id + '/'
        axios({
            method: 'put',
            url: address,
            data: formField
          }).then(response =>{
            if(response.status === 200){
                props.setCheck(true)
                props.handleClose()
            }
          })      
    }

    return (
        <Grid 
        container
        
        alignItems="center"
        justifyContent="center">
            <Grid item>
                <FormControl>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        name="Title"
                        value={title || ''}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl>
                    <input
                        type="text"
                        placeholder="Enter Artist"
                        name="Artist"
                        value={artist || ''}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl>
                    <input
                        type="text"
                        placeholder="Enter Album"
                        name="Album"
                        value={album || ''}
                        onChange={(e) => setAlbum(e.target.value)}
                    />
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl>
                    <input
                        type="date"
                        placeholder="Enter Release Date"
                        name="Release Date"
                        value={releaseDate || ''}
                        
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl>
                    <input
                        type="text"
                        placeholder="Enter Genre"
                        name="Genre"
                        value={genre || ''}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </FormControl>
            </Grid>
          
                <Button
                    startIcon={<SaveIcon />}
                    size="extra small"
                    style={{maxHeight:'20px'}}
                    variant='contained'
                    color='primary'
                    onClick={() => props.edit ? EditSong(id) : addNewSong}>
                        {props.edit ? 'Edit Song': 'Add Song'}
                </Button>
            
        </Grid>
    );
};

export default AddSong;
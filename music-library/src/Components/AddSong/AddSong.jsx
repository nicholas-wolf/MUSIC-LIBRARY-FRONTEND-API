import React, { useState } from 'react';

import axios from 'axios';
import { Grid } from '@mui/material';
import { FormControl } from '@mui/material';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';



const AddSong = () => {

   


    const [title, setTitle] = useState(null)
    const [artist, setArtist] = useState(null)
    const [album, setAlbum] = useState(null)
    const [releaseDate, setReleaseDate] = useState(null)
    const [genre, setGenre] = useState(null)


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
        }).then(response=>{
          console.log(response.data);
          
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
                        value={title}
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
                        value={artist}
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
                        value={album}
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
                        value={releaseDate}
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
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </FormControl>
            </Grid>
            <Button
                startIcon={<SaveIcon />}
                size="small"
                variant='contained'
                color='primary'
                onClick={addNewSong}>
                    Add Song
            </Button>
        </Grid>
    );
};

export default AddSong;
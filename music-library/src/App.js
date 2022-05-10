import React, { useEffect, useState } from "react";
import axios from 'axios';
import BasicTable from "./Components/MusicTable/MusicTable";
import AddSong from "./Components/AddSong/AddSong";





function App() {
  

    const [songs, setSongs] = useState([])

    useEffect(() => {
      getAllSongs();
    }, [])

    async function getAllSongs (){
        let response = await axios.get('http://localhost:8000/api/music/');

        console.log(response.data)
        setSongs(response.data)
    }

   

  return (

          <div> 
            <AddSong>
              await getAllSongs();
            </AddSong>
            <BasicTable parentEntries={songs}/>                
          </div> 
  );
}

export default App;

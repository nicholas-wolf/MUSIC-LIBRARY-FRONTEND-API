import React, {useState, useEffect}from "react";
import BasicTable from "./Components/MusicTable/MusicTable";
import AddSong from "./Components/AddSong/AddSong";
import axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([])
  const [check, setCheck] = useState(false)
  const [titles, setTitles] = useState([])
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [releaseDates, setReleaseDates] = useState([])
  const [genres, setGenres] = useState([])

 
    useEffect(() => {
      getAllSongs();
    }, [])
    useEffect(() => {
      if (check){
        getAllSongs()
      } 
      setCheck(false)
    }, [check])
    

    function createCategories(songs){
      let titlesArray =[]
      let artistArray =[]
      let albumsArray =[]
      let releaseDatesArray =[]
      let genresArray =[]
      let id = 1
      songs.map(song => {
        titlesArray.push({value:song.title, id:id})
        artistArray.push(song.artist)
        albumsArray.push(song.album)
        releaseDatesArray.push(song.releaseDate)
        genresArray.push(song.genre)
        id ++
      })
      setTitles(titlesArray)
      setArtists(artistArray)
      setAlbums(albumsArray)
      setReleaseDates(releaseDatesArray)
      setGenres(genresArray)
    }

    async function getAllSongs (){
        let response = await axios.get('http://localhost:8000/api/music/');
        setSongs(response.data)
        createCategories(songs);
    }
  return (
    <div> 
      <AddSong setCheck={setCheck} edit={false}/>
      {/* <SearchBar values={titles}  label={'titles'}/>
      <SearchBar values={artists}  label={'artists'}/>
      <SearchBar values={albums}  label={'albums'}/>
      <SearchBar values={releaseDates}  label={'release dates'}/>
      <SearchBar values={genres}  label={'genres'}/> */}
      <BasicTable songs={songs} setCheck={setCheck} />            
    </div> 
  );
}

export default App;

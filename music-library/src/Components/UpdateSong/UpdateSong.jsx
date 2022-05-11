import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddSong from '../AddSong/AddSong';
import Box from '@mui/material/Box';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <div>
      <Button onClick={handleOpen}>Edit Song</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <AddSong 
                setCheck={props.setCheck}
                edit={true} 
                rowId={props.rowId}
                rowTitle={props.rowTitle}
                rowArtist={props.rowArtist}
                rowAlbum={props.rowAlbum}
                rowReleaseDate={props.rowReleaseDate}
                rowGenre={props.rowGenre}
                handleClose={handleClose}
            />
          </Box>
        
      </Modal>
    </div>
  );
}

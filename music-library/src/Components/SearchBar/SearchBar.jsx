import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function SearchBar(props) {
  const [filter, setFilter] = useState('');
  const [values, setValues] = useState([{value:0, id:0}])
  useEffect(() => {
      if (props.values){
        setValues(props.values);
      }
    
  }, [props.values])
  const handleChange = (event) => {
    setFilter(event.target.value); 
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label= {props.label}
          onChange={handleChange}
        >{values.map(row => {
            {console.log(row)}
            <MenuItem defaultValue = {0} value={row.id}>{row.value}</MenuItem>
        })}
          
        </Select>
      </FormControl>
    </Box>
  );
}


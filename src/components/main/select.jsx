import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels({
  label,
  options,
  name,
  setSearchData,
  searchData,
  value
}) {
 

  const handleSelect = (e, name) => {
    setSearchData({ ...searchData, [name]: e.target.value });
  };
  

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120,  }}>
        
        <InputLabel id="demo-simple-select-helper-label" >{label}</InputLabel>
        <Select sx={{ height: 40 }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={label}
          onChange={(e) => handleSelect(e, name)}
     
        
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
         
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      
      </FormControl>
    </div>
  );
}

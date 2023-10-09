import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, Link } from "react-router-dom";
export default function BasicMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLink = (nav) => {
    navigate(nav);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{textTransform:"capitalize",background:"#199956",color:"white",padding:"3px 16px" ,"&:hover":{background:"#199956"}}}
      >
        Add New
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{
            handleClose();
            handleLink("/advertise/sale");

        }}>For Sale</MenuItem>
        <MenuItem onClick={()=>{
            handleClose();
            handleLink("/advertise/rent");

        }}>For Rent</MenuItem>
        
      </Menu>
    </div>
  );
}
import React, { useState, MouseEvent } from 'react';
import { Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const SimpleMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    console.log('Button clicked'); // Check if this logs
    setAnchorEl(event.currentTarget);
  };

  /*
  const handleClose = (mr: string) => () => { // trying to fix onBlur currently YAH
    if (mr === "") {
        console.log("hello?")
        setAnchorEl(null);
        return
    }
    setAnchorEl(null);
    //setModalRender(mr)
    //setModalOpen(true)
};*/

const handleClose = (event: MouseEvent<HTMLElement>) => {
    console.log(event.target)
    console.log('Menu closed'); // Check if this logs
    setAnchorEl(null);
  };

const handleMenuClick = (mr: string) => {
    console.log('Menu clicked'); // Check if this logs
    setAnchorEl(null);
    console.log(mr)
}

  return (
    <div>
        <div
            id="demo-positioned-button"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MenuIcon />
        </div>
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}

        >
            <MenuItem
            //onClick={handleClose("teams")}
            >
                <div className="menu-dropdown">Teams</div>
            </MenuItem>
            <MenuItem
            onClick={() => handleMenuClick("sfdf")}
            >
                <div className="menu-dropdown">Reset Code</div>
            </MenuItem>
        </Menu>
    </div>
  );
}

export default SimpleMenu;

import React, { useState, MouseEvent } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

// TODO - delete these test files!

const SimpleMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    console.log("Button clicked"); // Check if this logs
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("Menu closed"); // Check if this logs
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <div className="menu-dropdown">Reset Code</div>
      </Menu>
    </div>
  );
};

export default SimpleMenu;

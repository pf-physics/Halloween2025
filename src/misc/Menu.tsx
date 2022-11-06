import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Modal } from '@mui/material';
import pumpkin from "../assets/imgs/pumpkin.png"
import skeleton from "../assets/imgs/skeleton.png"
import { team1, team2 } from "../constants";
import { useState } from 'react';

export default function MenuDropDown() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [team, setTeam] = useState(localStorage.getItem("team"))
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setModalOpen(true)
    };

    const chooseTeam = (team: string) => {
        localStorage.setItem("team", team)
        setTeam(team)
        setModalOpen(false)
        window.location.reload()
    }


    const [modalOpen, setModalOpen] = React.useState(false)

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000',
        backgroundColor: "black",
        color: "lime",
        padding: "20px",
        borderRadius: "10px"
      };

    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={style} className='modal-content'>
                    <div className='modal-title'>Switch Teams</div>
                    <div>You are currently on the {team} team   </div>
                    <div className="team-choice">
                        <img style={{ cursor: "pointer" }} src={pumpkin} onClick={() => chooseTeam(team1)} />
                        <img style={{ width: "100px", height: "100px", cursor: "pointer" }} src={skeleton} onClick={() => chooseTeam(team2)} />
                    </div>
                </div>
            </Modal>
            <div
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </div>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <div className="menu-dropdown">Teams</div>
                </MenuItem>
            </Menu>
        </div>
    );
}

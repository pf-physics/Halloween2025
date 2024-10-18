import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  createTheme,
  FormControl,
  InputLabel,
  Modal,
  Select,
  SelectChangeEvent,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { TeamChoice } from "./SharedComponents";
import { useIncPoints } from "../hooks/pointsHooks";
import ChatMenu from "./ChatMenu";
import { setAutoSync } from "../store/miscSlice";

export default function MenuDropDown() {
  const teams = useAppSelector((state) => state.teams.value);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [team, setTeam] = useState(localStorage.getItem("team"));
  const open = Boolean(anchorEl);
  const [modalRender, setModalRender] = useState("teams");
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const incPoints = useIncPoints();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (mr: string) => () => {
    setAnchorEl(null);
    setModalRender(mr);
    setModalOpen(true);
  };
  const [teamErr, setTeamErr] = useState("");

  const chooseTeam = (team: string) => {
    if (teams.includes(team)) {
      localStorage.setItem("team", team);
      setTeam(team);
      setModalOpen(false);
      window.location.reload();
    } else {
      setTeamErr("This is not a real team");
    }
  };

  const clearCode = () => {
    localStorage.setItem("code", "");
    setModalOpen(false);
    window.location.reload();
  };

  const [modalOpen, setModalOpen] = React.useState(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    backgroundColor: "black",
    color: "lime",
    padding: "10px",
    borderRadius: "10px",
  };

  const theme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
            backgroundColor: "rgb(187, 0, 255)", // Change the background color of the select input
            color: "black", // Change text color of the select input
            "&:focus": {
              backgroundColor: "rgb(187, 0, 255)", // Keep background color on focus
            },
          },
          icon: {
            color: "#000000", // Change the color of the dropdown arrow
          },
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: "#000000", // Background color of each dropdown item
            color: "rgb(187, 0, 255)", // Text color of each dropdown item
            "&.Mui-selected": {
              backgroundColor: "rgb(112, 0, 153)", // Background color when selected
              color: "#000000", // Text color when selected
            },
          },
        },
      },
    },
  });

  /*
        <ThemeProvider theme={theme}>
          <FormControl fullWidth>
            <Select value={reason} label={"Reason"} onChange={handleReason}>
              <MenuItem value="N/A">
                <em>Reason</em>
              </MenuItem>
              <MenuItem className="select-override" value={"Digging"}>
                Tombstone
              </MenuItem>
              <MenuItem className="select-override" value={"Digging"}>
                Digging
              </MenuItem>
              <MenuItem className="select-override" value={20}>
                EMF
              </MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>*/

  const AddPointsForm = () => {
    const [points, setPoints] = useState(0);
    const [name, setName] = useState(""); // person name, whatever
    const [reason, setReason] = useState("");
    const [invalid, setInvalid] = useState(false);

    const handleUpdatePoints = (pts: string) => {
      if (!isNaN(parseInt(pts))) {
        setPoints(parseInt(pts));
      }
    };

    // and answer and potion
    const possibleReasons = [
      "digging",
      "emf",
      "crows",
      "tombstone",
      "rescue",
      "telepathy",
      "dissection",
      "boss",
    ];
    const handleReason = (event: SelectChangeEvent) => {
      setReason(event.target.value as string);
    };

    const checkReasonAndSubmit = () => {
      if (possibleReasons.includes(reason.toLowerCase())) {
        incPoints(points, reason.toLowerCase());
        handleClose();
        setModalOpen(false);
      } else {
        setInvalid(true);
      }
    };

    // TODO - only allow update points for the game codes and overwrite old ones I guess... still need history ough
    return (
      <div className="points-form">
        <div className="title">Add game points</div>
        <input
          value={points}
          onChange={(e) => handleUpdatePoints(e.target.value)}
        />
        <div className="title">Game name:</div>
        <input value={reason} onChange={handleReason} />
        <Button
          className="button"
          color="primary"
          variant="contained"
          disabled={points === 0 || reason === "" || reason === "N/A"}
          onClick={checkReasonAndSubmit}
        >
          <b>Update Points</b>
        </Button>
        {invalid && <div className="error">That is not a real game</div>}
      </div>
    );
  };

  const ToggleAutoSync = () => {
    const [autoSync, setAutoSync] = useState(
      localStorage.getItem("autoSync") === "true"
    );

    const toggleAutoSync = () => {
      const newAutoSync = !autoSync;
      localStorage.setItem("autoSync", newAutoSync.toString());
      setAutoSync(newAutoSync);
    };

    return (
      <div>
        <div className="title">Toggle autosync</div>
        <div>
          Autosync means the dialogue will change automatically when anyone
          updates it, without having to press next.
        </div>
        <Switch checked={autoSync} onChange={toggleAutoSync} />
      </div>
    );
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: "scroll" }}
      >
        {modalRender === "teams" ? (
          <div style={style} className="modal-content">
            <div className="modal-title">Switch Teams</div>
            <div>You are currently on the {team} team</div>
            <TeamChoice teamErr={teamErr} chooseTeam={chooseTeam} />
          </div>
        ) : modalRender === "points" ? (
          <div style={style} className="modal-content">
            <AddPointsForm />
          </div>
        ) : modalRender === "autosync" ? (
          <div style={style} className="modal-content">
            <ToggleAutoSync />
          </div>
        ) : modalRender === "chat" ? (
          <div
            style={{
              ...style,
              background: "rgb(46, 0, 63)",
              width: "80%",
              maxWidth: "400px",
            }}
            className="modal-content"
          >
            <ChatMenu />
          </div>
        ) : (
          <div style={style} className="modal-content">
            <div className="modal-title">Reset Code</div>
            <div>Click here to reset the game code</div>
            <Button
              color="primary"
              style={{ marginTop: "10px" }}
              variant="contained"
              onClick={clearCode}
            >
              Reset Code
            </Button>
          </div>
        )}
      </Modal>
      <div
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleMenuClick("points")}>
          <div className="menu-dropdown">Add Points</div>
        </MenuItem>
        <MenuItem onClick={handleMenuClick("teams")}>
          <div className="menu-dropdown">Teams</div>
        </MenuItem>
        <MenuItem onClick={handleMenuClick("code")}>
          <div className="menu-dropdown">Reset Code</div>
        </MenuItem>
        <MenuItem onClick={handleMenuClick("chat")}>
          <div className="menu-dropdown">Talk to Mort</div>
        </MenuItem>
        <MenuItem onClick={handleMenuClick("autosync")}>
          <div className="menu-dropdown">Toggle Autosync</div>
        </MenuItem>
      </Menu>
    </div>
  );
}

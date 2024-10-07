import React, { useState } from "react";
import { Button } from "@mui/material";

export const TeamChoice = ({
  teamErr,
  chooseTeam,
}: {
  teamErr: string;
  chooseTeam: (team: string) => void;
}) => {
  const [teamCode, setTeamCode] = useState("");

  return (
    <div>
      <div className="title">Choose your team</div>
      <input value={teamCode} onChange={(e) => setTeamCode(e.target.value)} />
      <Button
        className="button"
        color="primary"
        variant="contained"
        onClick={() => chooseTeam(teamCode)}
      >
        <b>Submit Team</b>
      </Button>
      <div className="error">{teamErr}</div>
    </div>
  );
};

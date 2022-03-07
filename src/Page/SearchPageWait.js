import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import "./SearchPageWait.css";

function SearchPageWait() {
  let history = useNavigate();
  let location = useLocation();
  let message = location.state;
  const handleclick = (e) => {
    history("/");
  };
  return (
    <div className="bigbox">
      <div className="content">
        <Typography variant="body2" component="div">
          <div className="waitingtext">{message}</div>
        </Typography>
        <div className="button">
          <Button
            variant="contained"
            fullWidth
            onClick={handleclick}
            style={{ backgroundColor: "#02A2EE", color: "#FFFFFF" }}
          >
            完成
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchPageWait;

import * as React from "react";
import {Button,Stack,Typography} from "@mui/material";
import Monologo from "../Pic/monologo.png";
import "./Home.css";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";

function Home() {
  let history = useNavigate();
  const [Open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const ClickRegisterPage = () => {
    if (true) {
      history("/RegisterPage");
    } else {
      setOpen(true);
    }
  };
  const ClickSearchPage = () => {
    history("/SearchPage");
  };
  return (
    <div class="box">
      <div className="Logo">
        <img src={Monologo} alt="Monologo" />
      </div>
      <div className="Text12">MonoLuck</div>
      <div className="Text22">鎖櫃登記系統</div>
      <div className="Botton">
        <Stack spacing={1}>
          <Button
            variant="contained"
            onClick={ClickRegisterPage}
            fullWidth
            startIcon={<EditIcon />}
            style={{ backgroundColor: "#02A2EE", color: "#FFFFFF" }}
          >
            鎖櫃登記
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={ClickSearchPage}
            startIcon={<SearchOutlinedIcon />}
            style={{ color: "#02A2EE" }}
          >
            登記查詢
          </Button>
        </Stack>
      </div>
      <div>
        <Dialog
          open={Open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" class="dialog">
            <ErrorIcon color="primary" />
            <Typography variant="subtitle1">您尚未選擇鎖櫃</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body2">
                請點擊欲租借的鎖櫃編號，可選三項，須至少輸入一項
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              確認
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Home;

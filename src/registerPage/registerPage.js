import * as React from "react";
import "./registerPage.css";
import { useState } from "react";
import MenuBar from "../components/MenuBar";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { styled } from "@mui/material/styles";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/system";
function RegisterPage() {
  
  const [Open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    setnumerror(false);
    sethelperTextError("請輸入您的手機號碼");
    e.preventDefault();
    if (num == "" || checkrule == false) {
      sethelperTextError("非暢遊會員,無法登記鎖櫃!");
      setnumerror(true);
    } else if (Object.keys(chipData).length == 0) {
      setOpen(true);
    } else {
    }
  };
  const handleCheck = () => {
    if (checkrule) {
      setcheckrule(false);
    } else {
      setcheckrule(true);
    }
  };
  const handleChangePhone =(e) => {
    console.log(e.target);
    setnum(e.target.value);
  }

  const [num, setnum] = useState("");
  const [helperTextCorrect, sethelperTextError] =
    useState("請輸入您的手機號碼");
  const [numerror, setnumerror] = useState(false);
  const [checkrule, setcheckrule] = useState(false);
  const [chipData, setChipData] = React.useState(() => []);

  const handleDelete = (chipToDelete) => () => {    
    let chip = chipData.filter(function (item) {
      return item !== chipToDelete;
    });
    setChipData(chip);
    setFormats(chip);
  };

  const [formats, setFormats] = React.useState(() => []);

  const handleFormat = (event, newFormats) => {
    let format_len = Object.keys(newFormats).length;
    if (format_len > 3) {
      newFormats.shift();
    }
    console.log();
    setFormats(newFormats);
    setChipData(newFormats);
  };
  return (
    <div class="box">
      <MenuBar name="鎖櫃登記" />
      <div class="Text1">
        請點擊欲租借的鎖櫃編號，可選三項，須至少輸入一項
      </div>
      <div>
        <div className="buttongroup">
          <div className="group1">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            fullWidth
          >
            <ToggleButton value="00" color="primary">
              00
            </ToggleButton>
            <ToggleButton value="01" color="primary">
              01
            </ToggleButton>
            <ToggleButton value="disabe" disabled ></ToggleButton>
            <ToggleButton value="disabe" disabled></ToggleButton>
            <ToggleButton value="disabe" disabled></ToggleButton>
            <ToggleButton value="disabe" disabled></ToggleButton>
            <ToggleButton value="02" color="primary">
              02
            </ToggleButton>
          </ToggleButtonGroup>
          </div>
          <div className="group2">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            fullWidth
          >
          <ToggleButton value="03" color="primary">
              03
            </ToggleButton>
            <ToggleButton value="04" color="primary">
              04
            </ToggleButton>
            <ToggleButton value="disabe" disabled></ToggleButton>
            <ToggleButton value="disabe" disabled></ToggleButton>
            <ToggleButton value="disabe" disabled></ToggleButton>
            <ToggleButton value="disabe" disabled></ToggleButton>
            <ToggleButton value="05" color="primary">
              05
            </ToggleButton></ToggleButtonGroup>
          </div>
          <div className="group3">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            fullWidth
          >
            <ToggleButton value="06" color="primary">
              06
            </ToggleButton>
            <ToggleButton value="07" color="primary">
              07
            </ToggleButton>
            <ToggleButton value="08" color="primary">
              08
            </ToggleButton>
            <ToggleButton value="09" color="primary">
              09
            </ToggleButton>
            <ToggleButton value="10" color="primary">
              10
            </ToggleButton>
            <ToggleButton value="11" color="primary">
              11
            </ToggleButton>
            <ToggleButton value="12" color="primary">
              12
            </ToggleButton>
          </ToggleButtonGroup>
          </div>
          <div className="group4">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            fullWidth
          >
                        <ToggleButton value="13" color="primary">
              13
            </ToggleButton>
            <ToggleButton value="14" color="primary">
              14
            </ToggleButton>
            <ToggleButton value="15" color="primary">
              15
            </ToggleButton>
            <ToggleButton value="16" color="primary">
              16
            </ToggleButton>
            <ToggleButton value="17" color="primary">
              17
            </ToggleButton>
            <ToggleButton value="18" color="primary">
              18
            </ToggleButton>
            <ToggleButton value="19" color="primary">
              19
            </ToggleButton>
          </ToggleButtonGroup>
          </div>
          <div className="group5">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            fullWidth
          >
                        <ToggleButton value="20" color="primary">
              20
            </ToggleButton>
            <ToggleButton value="21" color="primary">
              21
            </ToggleButton>
            <ToggleButton value="22" color="primary">
              22
            </ToggleButton>
            <ToggleButton value="23" color="primary">
              23
            </ToggleButton>
            <ToggleButton value="24" color="primary">
              24
            </ToggleButton>
            <ToggleButton value="25" color="primary">
              25
            </ToggleButton>
            <ToggleButton value="26" color="primary">
              26
            </ToggleButton>
          </ToggleButtonGroup>
          </div>
          <div className="group6">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            fullWidth
          >
            <ToggleButton value="27" color="primary">
              27
            </ToggleButton>
            <ToggleButton value="28" color="primary">
              28
            </ToggleButton>
            <ToggleButton value="29" color="primary">
              29
            </ToggleButton>
            <ToggleButton value="30" color="primary">
              30
            </ToggleButton>
            <ToggleButton value="31" color="primary">
              31
            </ToggleButton>
            <ToggleButton value="32" color="primary">
              32
            </ToggleButton>
            <ToggleButton value="33" color="primary">
              33
            </ToggleButton>
          </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <div className="choose">
          <Paper
            sx={{
              display:"flex", 
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
            }}
            component="ul"
          >
            <div className="Textchoose">選擇鎖櫃:</div>
            {chipData.map((data) => {
              let icon;
              return (
                <ListItem>
                  <Chip
                    icon={icon}
                    label={data}
                    onDelete={handleDelete(data)}
                  />
                </ListItem>
              );
            })}
          </Paper>
      </div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="phonenumber">
        <TextField
          id="outlined-password-input"
          label="手機號碼"
          onChange={(e) => handleChangePhone(e)}
          helperText={helperTextCorrect}
          error={numerror}
          fullWidth
        />
        </div>
        <div className="rules">
          <Checkbox onChange={handleCheck} checked={checkrule} />
          我已閱讀且同意遵守
          <Link href="https://monospace.guide/books/manual/page/31fef">
            新制會員物品管理規範
          </Link>
        </div>
        <div className="buttonsend">
        <Button variant="contained" type="submit" fullWidth>
          送出
        </Button></div>
      </form>

      <div>
        <Dialog
          open={Open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"您尚未選擇鎖櫃"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              請點擊欲租借的鎖櫃編號，可選三項，須至少輸入一項
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
export default RegisterPage;
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

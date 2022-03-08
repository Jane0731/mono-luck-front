import * as React from "react";
import "./RegisterPage.css";
import { useState } from "react";
import axios from "../Axios.config";
import {
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  Box,
  Link,
  Button,
  Chip,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ErrorIcon from "@mui/icons-material/Error";

function RegisterPage(props) {
  let history = useNavigate();

  const [formats, setFormats] = useState(() => []);
  const [num, setnum] = useState("");
  const [helperTextCorrect, sethelperTextError] =
    useState("請輸入您的手機號碼");
  const [numerror, setnumerror] = useState(false);
  const [checkrule, setcheckrule] = useState(false);
  const [chipData, setChipData] = useState(() => []);
  const [Open, setOpen] = useState(false);
  const [state, setstate] = useState("");
  const [color, setcolor] = useState("black");
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(/09\d{8,8}$/.test(num) || /8869\d{8,8}$/.test(num)) || num == "") {
      if (checkrule) {
        if (Object.keys(chipData).length == 0) {
          setOpen(true);
        }
        sethelperTextError("非暢遊會員,無法登記鎖櫃!");
        setnumerror(true);
        setcolor("black");
      } else {
        if (Object.keys(chipData).length == 0) {
          setOpen(true);
        }
        sethelperTextError("非暢遊會員,無法登記鎖櫃!");
        setnumerror(true);
        setcolor("#B00020");
      }
    } else if (!checkrule) {
      if (Object.keys(chipData).length == 0) {
        setOpen(true);
      }
      sethelperTextError("請輸入您的手機號碼");
      setnumerror(false);
      setcolor("#B00020");
    } else if (Object.keys(chipData).length == 0) {
      sethelperTextError("請輸入您的手機號碼");
      setnumerror(false);
      setcolor("black");
      setOpen(true);
    } else {
      setcolor("black");
      sethelperTextError("請輸入您的手機號碼");
      setnumerror(false);

      let lock = `${chipData}`;
      const json = JSON.stringify({ phone: num, priority: lock });
      axios
        .post("api/registerLocker", JSON.parse(json))
        .then((response) => {
          history("/RegisterFinishPage");
        })
        .catch((error) => {
          setnumerror(true);
          sethelperTextError(error.response.data["message"]);
        });
    }
  };

  const handleCheck = () => {
    setcheckrule(!checkrule);
  };

  const handleChangePhone = (e) => {
    let value = e.target.value.replace(/[^\d]/, "");
    setstate({ checkcode: value });
    setnum(value);
  };

  const handleDelete = (chipToDelete) => () => {
    let chip = chipData.filter(function (item) {
      return item !== chipToDelete;
    });
    setChipData(chip);
    setFormats(chip);
  };

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
    <div className="bigbox1">
      <div className="bigbox2">
        <div className="Text1">
          <Typography variant="body2">
            請點擊欲租借的置物櫃編號，可選三項，須至少輸入一項，選擇的置物櫃順序為置物櫃抽選志願序。
          </Typography>
        </div>
        <div className="divider1">
          <Divider variant="middle" />
        </div>
        <div>
          <div className="buttongroup">
            <div className="group">
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                fullWidth
              >
                <ToggleButton
                  value="00"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  00
                </ToggleButton>
                <ToggleButton
                  value="01"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  01
                </ToggleButton>
                <ToggleButton
                  value="disabe"
                  disabled
                  style={{
                    backgroundColor: "#E5E5E5",
                    border: "solid 1px #E0E0E0",
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="disabe"
                  disabled
                  style={{
                    backgroundColor: "#E5E5E5",
                    border: "solid 1px #E0E0E0",
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="disabe"
                  disabled
                  style={{
                    backgroundColor: "#E5E5E5",
                    border: "solid 1px #E0E0E0",
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="disabe"
                  disabled
                  style={{
                    backgroundColor: "#E5E5E5",
                    border: "solid 1px #E0E0E0",
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="02"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  02
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="group">
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                fullWidth
              >
                <ToggleButton
                  value="03"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  03
                </ToggleButton>
                <ToggleButton
                  value="04"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  04
                </ToggleButton>
                <ToggleButton
                  value="disabe"
                  disabled
                  style={{
                    backgroundColor: "#E5E5E5",
                    border: "solid 1px #E0E0E0",
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="disabe"
                  disabled
                  style={{
                    backgroundColor: "#E5E5E5",
                    border: "solid 1px #E0E0E0",
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="disabe"
                  disabled
                  style={{
                    backgroundColor: "#E5E5E5",
                    border: "solid 1px #E0E0E0",
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="disabe"
                  disabled
                  style={{
                    backgroundColor: "#E5E5E5",
                    border: "solid 1px #E0E0E0",
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="05"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  05
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="group">
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                fullWidth
              >
                <ToggleButton
                  value="06"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  06
                </ToggleButton>
                <ToggleButton
                  value="07"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  07
                </ToggleButton>
                <ToggleButton
                  value="08"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  08
                </ToggleButton>
                <ToggleButton
                  value="09"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  09
                </ToggleButton>
                <ToggleButton
                  value="10"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  10
                </ToggleButton>
                <ToggleButton
                  value="11"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  11
                </ToggleButton>
                <ToggleButton
                  value="12"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  12
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="group">
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                fullWidth
              >
                <ToggleButton
                  value="13"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  13
                </ToggleButton>
                <ToggleButton
                  value="14"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  14
                </ToggleButton>
                <ToggleButton
                  value="15"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  15
                </ToggleButton>
                <ToggleButton
                  value="16"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  16
                </ToggleButton>
                <ToggleButton
                  value="17"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  17
                </ToggleButton>
                <ToggleButton
                  value="18"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  18
                </ToggleButton>
                <ToggleButton
                  value="19"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  19
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="group">
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                fullWidth
              >
                <ToggleButton
                  value="20"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  20
                </ToggleButton>
                <ToggleButton
                  value="21"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  21
                </ToggleButton>
                <ToggleButton
                  value="22"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  22
                </ToggleButton>
                <ToggleButton
                  value="23"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  23
                </ToggleButton>
                <ToggleButton
                  value="24"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  24
                </ToggleButton>
                <ToggleButton
                  value="25"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  25
                </ToggleButton>
                <ToggleButton
                  value="26"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  26
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="group">
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                fullWidth
              >
                <ToggleButton
                  value="27"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  27
                </ToggleButton>
                <ToggleButton
                  value="28"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  28
                </ToggleButton>
                <ToggleButton
                  value="29"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  29
                </ToggleButton>
                <ToggleButton
                  value="30"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  30
                </ToggleButton>
                <ToggleButton
                  value="31"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  31
                </ToggleButton>
                <ToggleButton
                  value="32"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  32
                </ToggleButton>
                <ToggleButton
                  value="33"
                  color="primary"
                  style={{ color: "#000000" }}
                >
                  33
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </div>
        <div className="choose">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
            }}
            component="ul"
          >
            <div className="Textchoose">選擇置物櫃:</div>
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
          </Box>
        </div>
        <div className="divider2">
          <Divider variant="middle" />
        </div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className="phonenumber">
            <TextField
              onPaste={(e) => e.preventDefault()}
              inputProps={{ inputMode: "numeric" }}
              value={state.checkcode}
              label="手機號碼"
              onChange={(e) => handleChangePhone(e)}
              helperText={helperTextCorrect}
              error={numerror}
              fullWidth
            />
          </div>
          <div className="rules">
            <FormControlLabel
              label=""
              control={
                <Checkbox
                  onChange={handleCheck}
                  checked={checkrule}
                  sx={{ color: { color } }}
                />
              }
            />
            <div className="checkbox">
              <Typography variant="body2" sx={{ color: { color } }}>
                我已閱讀且同意遵守
                <Link
                  target="_blank"
                  href="https://monospace.guide/books/manual/page/31fef"
                >
                  新制會員物品管理規範
                </Link>
              </Typography>
            </div>
          </div>
          <div className="buttonsend">
            <Button
              variant="contained"
              type="submit"
              fullWidth
              style={{ backgroundColor: "#02A2EE", color: "#FFFFFF" }}
            >
              送出
            </Button>
          </div>
        </form>
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
            <Typography variant="subtitle1">您尚未選取置物櫃</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body2">
                請依順序點選置物櫃編號，最多可選取三個置物櫃位置，選取的鎖櫃順序為置物櫃抽選志願序。
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
export default RegisterPage;
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

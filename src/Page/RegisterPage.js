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
    if (num == "") {
      if (checkrule) {
        sethelperTextError("請填寫手機號碼");
        setnumerror(true);
        setcolor("black");
      } else {
        sethelperTextError("請填寫手機號碼");
        setcolor("red");
        setnumerror(true);
      }
    } else if (checkrule == false) {
      setcolor("red");
    } else if (Object.keys(chipData).length == 0) {
      setnumerror(false);
      setOpen(true);
    } else {
      setcolor("black");
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
      <div className="Text1">
        <Typography variant="body2">
          請點擊欲租借的置物櫃編號，可選三項，須至少輸入一項，選擇的置物櫃順序為置物櫃抽選志願序。
        </Typography>
      </div>
      <div className="divider2">
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
              <ToggleButton value="00" color="primary">
                00
              </ToggleButton>
              <ToggleButton value="01" color="primary">
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
              <ToggleButton value="02" color="primary">
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
              <ToggleButton value="03" color="primary">
                03
              </ToggleButton>
              <ToggleButton value="04" color="primary">
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
              <ToggleButton value="05" color="primary">
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
          <div className="group">
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
          <div className="group">
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
          <div className="group">
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
                <Chip icon={icon} label={data} onDelete={handleDelete(data)} />
              </ListItem>
            );
          })}
        </Box>
      </div>
      <div className="divider">
        <Divider variant="middle" />
      </div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="phonenumber">
          <TextField
            onPaste={(e) => e.preventDefault()}
            inputProps={{inputMode:"numeric"}}
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
            label="我已閱讀且同意遵守"
            control={
              <Checkbox
                onChange={handleCheck}
                checked={checkrule}
                sx={{ color: { color } }}
              />
            }
            sx={{ color: { color } }}
          />
          <Link
            target="_blank"
            href="https://monospace.guide/books/manual/page/31fef"
          >
            新制會員物品管理規範
          </Link>
        </div>
        <div className="buttonsend">
          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={{ backgroundColor: "#02A2EE", color: "#FFFFFF"}}
          >
            送出
          </Button>
        </div>
      </form>
      <div>
        <Dialog
          open={Open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" class="dialog">
            <ErrorIcon color="primary" />
            <Typography variant="subtitle1">您尚未選擇置物櫃</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body2">
                請點擊欲租借的置物櫃編號，可選三項，須至少輸入一項
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

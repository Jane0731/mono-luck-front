import * as React from "react";
import { Button, TextField } from "@mui/material";
import "./SearchPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Axios.config";

function SearchPage() {
  let history = useNavigate();
  const [state, setstate] = useState("");
  const [helperTextCorrect, sethelperTextError] =
    useState("請輸入您的手機號碼");
  const [numerror, setnumerror] = useState(false);
  const [num, setnum] = useState("");

  const handleChangePhone = (e) => {
    let value = e.target.value.replace(/[^\d]/, "");
    setstate({ checkcode: value });
    setnum(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (num == "") {
      sethelperTextError("請填寫手機號碼");
      setnumerror(true);
    } else if (!(/09\d{8,8}$/.test(num) || /886\d{9,9}$/.test(num))) {
      sethelperTextError("非暢遊會員,無法登記鎖櫃!")
      setnumerror(true);
    } else {
      axios
        .get("/api/lottery", {
          params: {
            phone: num,
          },
        })
        .then((response) => {
          history("/SearchPageWait", { state: response.data.message });
        })
        .catch((error) => {
          setnumerror(true);
          sethelperTextError(error.response.data["message"]);
        });
    }
  };
  return (
    <div className="box">
      <div className="box2">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className="phoneenter">
            <TextField
              id="outlined-password-input"
              onPaste={(e) => e.preventDefault()}
              value={state.checkcode}
              inputProps={{ inputMode: "numeric" }}
              label="手機號碼"
              onChange={(e) => handleChangePhone(e)}
              helperText={helperTextCorrect}
              error={numerror}
              fullWidth
            />
          </div>
          <div className="finishbutton1">
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#02A2EE", color: "#FFFFFF" }}
              fullWidth
            >
              完成
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SearchPage;

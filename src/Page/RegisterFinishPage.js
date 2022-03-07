import * as React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import './RegisterFinishPage.css';



function RegisterFinishPage() {
    let history = useNavigate();
    const handleclick = (e) => {
      history("/");
    };
  return (
      <div className="bigbox">
      <div className="icon">
      <CheckCircleIcon  fontSize="large"/>
      </div>
      <div className="text1">
      <Typography variant="h4" component="div" >
        登記成功
      </Typography>
      </div>
      <div className="textbox">
      <Typography variant="body2" component="div">
        <div className="text2">請於 03/14 中午 12:00 至本系統查詢抽籤結果。</div>
      </Typography>
      </div>
      <div className="finishbutton2">
      <Button variant="contained" onClick={handleclick} fullWidth style={{ backgroundColor: "#02A2EE", color: "#FFFFFF" }}>完成</Button>
      </div>
    </div>
  );
}

export default RegisterFinishPage;

import * as React from "react";
import MenuBar from "../components/MenuBar";
import Box from "@mui/material/Box";
import IconButton from "../components/IconButton";
import Monologo from "../pic/monologo.png";
import Text1 from "../components/Text1";
import Text2 from "../components/Text2";
import "./Home.css";

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="Appbar">
        {" "}
        <MenuBar name="首頁" />
      </div>
      <div className="Logo">
        <img src={Monologo} alt="Monologo" />
      </div>
      <div className="Bigbox">
        <div className="Text1">
          <Text1 />
        </div>
        <div className="Text2">
          <Text2 />
        </div>
      </div>
      <div className="Botton">
        <IconButton />
      </div>
    </Box>
  );
}

export default Home;

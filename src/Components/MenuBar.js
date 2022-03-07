import * as React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Drawer,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import CreateIcon from "@mui/icons-material/Create";
import ErrorIcon from "@mui/icons-material/Error";

import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import "../Components/MenuBar.css";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function MenuBar(props) {
  let history = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const MenuBarTitleMap = [
    { path: "/", title: "首頁" },
    { path: "/RegisterPage", title: "置物櫃登記" },
    { path: "/SearchPage", title: "查詢登記" },
    { path: "/RegisterFinishPage", title: "登記成功" },
    { path: "/SearchPageWait", title: "查詢登記" },
  ];
  let location = useLocation();
  let Menutitle;
  MenuBarTitleMap.forEach((key, value) => {
    if (key.path === location.pathname) {
      Menutitle = key.title;
    }
  });

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const StyledList = styled(List)({
    // hover states
    "& .MuiListItemButton-root:hover": {
      backgroundColor: "#E1F4FD",
      "&, & .Typography-root": {
        color: "#02A2EE",
      },
    },
  });
  const ClickRegisterPage = () => {
    let time = new Date();
    let theTime = time.getTime();
    if (true) {
      history("/RegisterPage");
    } else {
      setOpen(true);
    }
  };
  const [Open, setOpen] = useState(false);

  const ClickSearchPage = () => {
    history("/SearchPage");
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="barlogo">
          <Avatar>H</Avatar>
        </div>
        <div className="bartext1">
          <Typography variant="h6" component="div">
            MonoLuck
          </Typography>
        </div>
        <div className="bartext2">
          <Typography variant="body2" component="div">
            Monosparta
          </Typography>
        </div>
        <ListItem disablePadding>
          <div className="barbutton1">
            <StyledList
              sx={{
                "& .MuiListItemButton-root:hover": {
                  "&, & .Typography-root": {
                    color: "#02A2EE",
                  },
                },
              }}
            >
              <ListItemButton onClick={ClickRegisterPage}>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <Typography variant="subtitle2">置物櫃登記</Typography>
              </ListItemButton>
            </StyledList>
          </div>
        </ListItem>
        <ListItem disablePadding>
          <div className="barbutton1">
            <StyledList
              sx={{
                "& .MuiListItemButton-root:hover": {
                  "&, & .Typography-root": {
                    color: "#02A2EE",
                  },
                },
              }}
            >
              <ListItemButton onClick={ClickSearchPage}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <Typography variant="subtitle2">查詢登記</Typography>
              </ListItemButton>
            </StyledList>
          </div>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <AppBar class="bar" position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon onClick={toggleDrawer(anchor, true)} />
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </IconButton>
          <Typography variant="h6">{Menutitle}</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Dialog
          open={Open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" class="dialog">
            <ErrorIcon color="primary" />
            <Typography variant="subtitle1">置物櫃登記已結束</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body2">
                置物櫃登記已結束，請於 12/12 AM 10 回來本系統查看中籤資訊
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
export default MenuBar;

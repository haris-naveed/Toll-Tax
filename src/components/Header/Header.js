import { AppBar, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Header() {
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "#ffc400",
          height: "70px",
          display: "flex",
          flexDirection: "row",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
        position="static"
        color="inherit"
      >
        <Button  variant="text" size="large" sx={{ color: "black",fontSize:"20px" }} onClick={()=>console.log('Entry toll clicked')}>
          
          <Link to='/'>
          Entry Toll
         </Link>
        </Button>

        <Button  variant="text" size="large" sx={{ color: "black",fontSize:"20px" }} onClick={()=>console.log('Exit toll clicked')}>
         <Link to='/ExitToll' >
          Exit Toll
         </Link>
        </Button>
      </AppBar>
    </div>
  );
}

export default Header;

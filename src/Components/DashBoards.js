import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, Stack } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Customer from "./Customer";
import Dash from "./Dash";
import Revenue from "./Revenue";
import Renewal from "./Renewal";
import Help from "./Help";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
function DashBoards() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <HomeIcon />
    </Link>,

    <Typography key="2" color="text.primary">
      Dashboard
    </Typography>,
  ];
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, color: "black", fontWeight: "bold" }}
            >
              LOGO
            </Typography>

            <SettingsIcon sx={{ color: "black", paddingX: "7px" }} />
            <Badge
              sx={{ color: "red" }}
              overlap="circular"
              badgeContent=" "
              variant="dot"
            >
              <NotificationsIcon
                sx={{ color: "black", borderRadius: "20px", paddingX: "20px" }}
              />
            </Badge>
            <Avatar sx={{ backgroundColor: "#1181B2" }}>AD</Avatar>

            {/* <Button style={{ color: "black" }}>Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "5%",
            height: "872px",
            position: "relative",
            top: "65px",
            backgroundColor: "#E2F6FF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Dash />
          <Customer />
          <Revenue />
          <Renewal />
          <Help />
        </Box>
        <Box
          border={"1px solid black"}
          height="870px"
          width="95%"
          sx={{ position: "relative", top: "65px" }}
        >
          <Box border={"1px solid red"}>
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DashBoards;

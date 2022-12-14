import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import login from "../Assests/Cyber_security_awareness_02.png";
import { Link } from "react-router-dom";
function LoginPage() {
  const [formData, setformData] = useState({
    userName: "",
    password: "",
  });
  const [errText, seterrText] = useState({
    userName: "",
    password: "",
  });
  const validate = () => {
    const initial = {
      userName: "",
      password: "",
    };
    const errObj = { ...initial };

    if (!formData.userName) {
      errObj.userName = "This field is required";
    }

    if (!formData.password) {
      errObj.password = "This field is required";
    }

    if (!errObj.userName && !errObj.password) {
      seterrText(initial);
      return true;
    } else {
      seterrText(errObj);
      return false;
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (validate()) {
      const { userName, password } = formData;
      console.log(userName);
      console.log(password);
      setformData({
        userName: "",
        password: "",
      });
    }
  };

  return (
    <Box height="100%">
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          md={8}
          sx={{
            backgroundImage: `url(${login})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center  ",
            alignItems: "center",
          }}
        >
          <Box
            padding={3}
            sx={{
              width: "450px",
              height: "350px",
              boxShadow: 3,
              borderRadius: "25px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#1181B2", fontWeight: "bold" }}
            >
              Login
            </Typography>
            <Box py={2}>
              <Typography sx={{ fontSize: "15px" }}>
                E-mail ID / Mobile Number
              </Typography>
              <TextField
                name="userName"
                value={formData.userName}
                onChange={onInputChange}
                fullWidth
                size="small"
                placeholder="Enter E-mail ID / Mobile Number"
                sx={{
                  "& ::placeholder": {
                    fontSize: "12px",
                    color: "#A6A6A6",
                  },
                }}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errText.userName}
              </span>
            </Box>
            <Box py={2}>
              <Typography sx={{ fontSize: "15px" }}>Password</Typography>
              <TextField
                fullWidth
                name="password"
                value={formData.password}
                onChange={onInputChange}
                size="small"
                placeholder="Enter Password"
                sx={{
                  "& ::placeholder": {
                    fontSize: "12px",
                    color: "#A6A6A6",
                  },
                }}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errText.password}
              </span>
            </Box>
            <Box>
              <Button
                fullWidth
                sx={{
                  fontSize: "20px",
                  color: "#FEFFFF",
                  backgroundColor: "#1181B2",
                  border: "0.5px solid #0F6F9A",
                  "&:hover": {
                    backgroundColor: "#1181B2",
                  },
                }}
                onClick={handleSubmit}
              >
                <Link
                  to="/OtpVerification"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Get OTP
                </Link>
                
              </Button>
            </Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ justifyContent: "space-between" }}
            >
              <Button
                variant="text"
                sx={{ color: "#1181B2", fontSize: "11px" }}
              >
                <Link
                  to="/ResetPassword"
                  style={{ textDecoration: "none", color: "#1181B2" }}
                >
                  Re-set Password
                </Link>
              </Button>
              <Button
                variant="text"
                sx={{ color: "#1181B2", fontSize: "11px" }}
              >
                <Link
                  to="/ForgetPassword"
                  style={{ textDecoration: "none", color: "#1181B2" }}
                >
                  {" "}
                  Forgot Password ?
                </Link>
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginPage;

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ForgetPasswords from "../Assests/Forgot_password.png";
function ForgetPassword() {
  const [formData, setformData] = useState({
    userName: "",
  });
  const [errText, seterrText] = useState({
    userName: "",
  });
  const validate = () => {
    const initial = {
      userName: "",
    };
    const errObj = { ...initial };

    if (!formData.userName) {
      errObj.userName = "This field is required";
    }

    if (!errObj.userName) {
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
      const { userName } = formData;
      console.log(userName);

      setformData({
        userName: "",
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
            backgroundImage: `url(${ForgetPasswords})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
              height: "220px",
              boxShadow: 3,
              borderRadius: "25px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#1181B2", fontWeight: "bold" }}
            >
              Forgot Password ?
            </Typography>
            <Box py={3}>
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

            <Box>
              <Button
                onClick={handleSubmit}
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
              >
                <Link
                  to="/OtpVerifys"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Get OTP
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ForgetPassword;

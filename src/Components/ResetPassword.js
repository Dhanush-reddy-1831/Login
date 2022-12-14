import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResetPasswords from "../Assests/Reset_password_cuate.png";

function ResetPassword() {
  const [formData, setformData] = useState({
    oldpassword: "",
    password: "",
    confirmpassword: "",
  });
  const [errText, seterrText] = useState({
    oldpassword: "",
    password: "",
    confirmpassword: "",
  });
  const validate = () => {
    const initial = {
      newpassword: "",
      password: "",
      confirmpassword: "",
    };
    const errObj = { ...initial };
    if (!formData.oldpassword) {
      errObj.oldpassword = "This field is required";
    }
    if (!formData.password) {
      errObj.password = "This field is required";
    }

    if (!formData.confirmpassword) {
      errObj.confirmpassword = "This field is required";
    }

    if (!errObj.oldpassword && !errObj.password && !errObj.confirmpassword) {
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
      const { oldpassword, password, confirmpassword } = formData;
      console.log(oldpassword);
      console.log(password);
      console.log(confirmpassword);
      setformData({
        oldpassword: "",
        password: "",
        confirmpassword: "",
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
            backgroundImage: `url(${ResetPasswords})`,
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
              height: "410px",
              boxShadow: 3,
              borderRadius: "25px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#1181B2", fontWeight: "bold" }}
            >
              Re-set Password
            </Typography>
            <Box py={1}>
              <Typography sx={{ fontSize: "15px" }}>Old Password</Typography>
              <TextField
                name="oldpassword"
                value={formData.oldpassword}
                onChange={onInputChange}
                fullWidth
                size="small"
                placeholder="Enter Old password"
                sx={{
                  "& ::placeholder": {
                    fontSize: "12px",
                    color: "#A6A6A6",
                  },
                }}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errText.oldpassword}
              </span>
            </Box>
            <Box py={1}>
              <Typography sx={{ fontSize: "15px" }}>New password</Typography>
              <TextField
                name="password"
                value={formData.password}
                onChange={onInputChange}
                fullWidth
                size="small"
                placeholder="Enter New password"
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
            <Box py={1}>
              <Typography sx={{ fontSize: "15px" }}>
                Confirm New password
              </Typography>
              <TextField
                fullWidth
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={onInputChange}
                size="small"
                placeholder="Enter Confirm password"
                sx={{
                  "& ::placeholder": {
                    fontSize: "12px",
                    color: "#A6A6A6",
                  },
                }}
              />
              <span style={{ color: "red", fontSize: "12px" }}>
                {errText.confirmpassword}
              </span>
            </Box>
            <Box py={1.5}>
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
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Update password
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ResetPassword;

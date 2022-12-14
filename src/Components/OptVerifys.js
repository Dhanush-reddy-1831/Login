import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import otpVerify from "../Assests/Group.png";
import { Link } from "react-router-dom";
function OtpVerifys() {
  const [OTP, setOTP] = useState("");
  console.log(OTP);
  return (
    <Box height="100%">
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          md={8}
          sx={{
            backgroundImage: `url(${otpVerify})`,
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
              height: "200px",
              boxShadow: 3,
              borderRadius: "25px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#1181B2", fontWeight: "bold" }}
            >
              OTP Verification
            </Typography>
            <Box py={2}>
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                numInputs={6}
                otpType="number"
                disabled={false}
                placeholder="______"
                inputStyle={{
                  width: "3rem",
                  height: "2.5rem",
                  // margin: "0 1rem",
                  margin: 10,
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid #D7D7D7",
                }}
              />
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
              >
                <Link
                  to="/Updateconfirmpassword"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {" "}
                  Submit
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OtpVerifys;

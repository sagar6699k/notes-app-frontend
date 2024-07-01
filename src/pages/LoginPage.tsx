import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Signup from "../components/signup/Signup";
import About from "../components/about/About";
import LoginImg from "../components/login/login_img.svg";
import Login from "../components/login/Login";

const LoginPage: React.FC = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 0 }}
      justifyContent="center"
      alignItems="center"
      width="80%"
      marginX="auto"
      marginTop={8.5}
      borderRadius={1}
      pt={5}
      height="85vh"
      // bgcolor="#c28a8a"
      sx={{
        background:
          "linear-gradient(200deg, #031739 0%, rgba(38, 130, 148, 0.88) 50%, #133d4c 97%)",
      }}
    >
      {/* <Box width="40%" minHeight="100%" p={3}> */}
      <Box width={{ xs: "100%", sm: "75%", md: "40%" }} minHeight="100%" p={3}>
        <Box bgcolor="#FFFFFF" borderRadius={2}>
          <Box
            display="flex"
            flexDirection="column"
            rowGap={0}
            pt={1}
            pl={4}
            pb={3}
          >
            <Typography
              textTransform="uppercase"
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                fontWeight: "600",
                background:
                  "linear-gradient(200deg, #031739 0%, rgba(38, 130, 148, 0.88) 50%, #133d4c 97%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text", // For non-WebKit browsers
                textFillColor: "transparent", // For non-WebKit browsers
              }}
            >
              Welcome back
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" } }}
            >
              Doesn't have an account yet?{" "}
              <span style={{ color: "#068cfa" }}>Signup</span>
            </Typography>
          </Box>
          <Login />
        </Box>
      </Box>
      <Box
        width="60%"
        display={{ xs: "none", sm: "block" }}
        minHeight="100%"
        p={2}
        pt={5}
      >
        {/* <About /> */}
        <img src={LoginImg} alt="login" width="100%" height="auto" />
      </Box>
    </Stack>
  );
};

export default LoginPage;

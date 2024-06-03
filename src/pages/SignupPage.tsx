import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Signup from "../components/signup/Signup";
import About from "../components/about/About";

const SignupPage: React.FC = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 0 }}
      justifyContent="center"
      alignItems="center"
      width="70%"
      marginX="auto"
      marginTop={7}
      pt={4}
      height="85vh"
    >
      <Box
        flex={1}
        display={{ xs: "none", sm: "block" }}
        minHeight="100%"
        p={2}
        color="#FFFFFF"
        sx={{
          borderRadius: "0.5rem 0 0 0.5rem",
          background:
            "linear-gradient(200deg, #031739 0%, rgba(38, 130, 148, 0.88) 50%, #133d4c 97%)",
        }}
      >
        <About />
      </Box>
      <Box
        flex={1}
        minHeight="100%"
        p={2}
        bgcolor="#FFFFFF"
        sx={{ borderRadius: "0 0.5rem 0.5rem 0" }}
      >
        <Typography
          textTransform="uppercase"
          sx={{
            fontSize: "2rem",
            fontWeight: "600",
            background:
              "linear-gradient(200deg, #031739 0%, rgba(38, 130, 148, 0.88) 50%, #133d4c 97%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text", // For non-WebKit browsers
            textFillColor: "transparent", // For non-WebKit browsers
          }}
          gutterBottom
        >
          Create Account
        </Typography>
        <Signup />
      </Box>
    </Stack>
  );
};

export default SignupPage;

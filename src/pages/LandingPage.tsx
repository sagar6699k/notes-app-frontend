import React from "react";
import { Box, Container, Toolbar } from "@mui/material";
import CreateNote from "../components/createNote/CreateNote";
import DisplayNotes from "../components/displayNotes/DisplayNotes";

const LandingPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Toolbar />
        <Box
          component="main"
          pt={1}
          sx={{ minHeight: "100vh", height: "auto" }}
        >
          <CreateNote />
          <DisplayNotes />
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;

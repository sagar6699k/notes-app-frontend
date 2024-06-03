import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Stack direction="column" columnGap={2}>
      <Typography variant="h3" component="h3" gutterBottom>
        About Us
      </Typography>
      <Typography component="p" gutterBottom>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quod
        officiis qui, itaque recusandae a ipsam aperiam. Obcaecati, praesentium
        repudiandae sint recusandae porro reiciendis impedit perspiciatis
        quisquam soluta, officiis illum libero molestiae quam quae assumenda
        fugit iure placeat nostrum modi vitae magni similique omnis voluptate.
        Eum harum reprehenderit commodi, molestias culpa asperiores est fugiat
        nesciunt saepe, quam earum laborum unde possimus alias. necessitatibus
        quae dolore exercitationem tempore ratione inventore!
      </Typography>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography variant="h6" component="h6">
          Already have an account
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            color: "#cfcaca",
            fontWeight: "600",
            borderRadius: "1rem",
              border: "1px solid white",
            padding: "0.1rem 1rem"
          }}
        >
          Sign In
        </Button>
      </Box>
    </Stack>
  );
};

export default About;

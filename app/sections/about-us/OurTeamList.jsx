import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import UserCard from "./user-card/user-card";
import { popins } from "@/app/google-fonts/fonts";

const OurTeamList = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, px: 2 }}>
      <Typography
        textAlign="center"
        variant="h2"
        fontSize={30}
        color="white"
        className={popins.className}
        fontWeight={600}
      >
        Our Team
      </Typography>
      <Box
        my={5}
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        {[
          {
            name: "Amith",
            id: 1,
            image: "",
            role: "software engineer",
            experience: "40+ year",
          },
          {
            name: "Amith",
            id: 2,
            image: "",
            role: "software engineer",
            experience: "40+ year",
          },
          {
            name: "Amith",
            id: 3,
            image: "",
            role: "software engineer",
            experience: "40+ year",
          },
        ].map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          size="large"
          variant="contained"
          sx={{ bgcolor: "white", color: "black" }}
        >
          View All Team
        </Button>
      </Box>
    </Container>
  );
};

export default OurTeamList;
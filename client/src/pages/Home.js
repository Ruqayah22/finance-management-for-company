import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../images/background.png";
import SidebarMenu from "../components/SidebarMenu";

const Home = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SidebarMenu />
      {/* <Grid sx={{ position: "relative", left: "68%", top: "25%" }}> */}
      <Typography
        gutterBottom
        variant="h3"
        color="#fff"
        sx={{ position: "relative", left: "68%", top: "24%" }}
      >
        شركة النوفلي
      </Typography>
      <Typography
        gutterBottom
        variant="h4"
        color="#fff"
        sx={{ position: "relative", left: "70%", top: "25%" }}
      >
        للحدادة العامة
      </Typography>
      <Typography
        variant="body1"
        color="#fff"
        sx={{
          fontSize: "130%",
          position: "relative",
          left: "66%",
          top: "35%",
        }}
      >
        عمل معامل الطحين الجملونات الابواب
      </Typography>
      <Typography
        variant="body1"
        color="#fff"
        sx={{
          fontSize: "130%",
          position: "relative",
          left: "66%",
          top: "35%",
        }}
      >
        والشبابيك قص وثني الحديد تجارة الحديد
      </Typography>
      {/* </Grid> */}
    </Box>
  );
};

export default Home;

import React from "react";
import "../utils/style.css";
import { Box } from "@mui/material";

import Footer from "../components/footer";
import { Header } from "../components/header";
import Myself from "../components/myself";
import ProjectsSection from "../components/projects";

export default function Home() {
  return (
    <Box sx={{ p: 0 }}>
      <Header />
      <Myself />
      <ProjectsSection />
      <Footer />
    </Box>
  );
}

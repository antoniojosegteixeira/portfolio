import { useState } from "react";
import { Typography, Grid } from "@mui/material";

const ProjectType = {
  Mobile: "mobile",
  Web: "web",
};

export default function ProjectSwitcher() {
  const [selectedProject, setSelectedProject] = useState(ProjectType.Mobile);

  const normalButtonStyle = {
    border: "1px solid white",
    backgroundColor: "#000",
    borderRadius: 2,

    padding: "0.5rem",
    userSelect: "none",
    color: "white",
    width: "fit-content",
    float: "left",
    marginRight: 1,
    marginBottom: 1,
    marginTop: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: { xs: "center", md: "center" },
  };

  const selectedButtonStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: { xs: "center", md: "center" },
    border: "1px solid white",
    backgroundColor: "#fff",
    borderRadius: 2,
    padding: "0.5rem",
    userSelect: "none",
    color: "white",
    width: "fit-content",
    float: "left",
    marginRight: 1,
    marginBottom: 1,
    marginTop: 1,
    "& span": {
      color: "black",
    },
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        paddingTop: "0.2rem",
        paddingLeft: { md: "1.5rem", lg: "0rem" },
        textAlign: { xs: "center", md: "left" },

        justifyContent: "center",
        "& h2": {
          padding: "1.2rem 0",
        },
        "& p": {
          paddingBottom: "1.2rem",
        },
      }}
    >
      <Grid
        key={ProjectType.Mobile}
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "center", md: "center" },
        }}
      >
        <Grid
          item
          xs={5}
          md={2}
          sx={
            selectedProject === ProjectType.Mobile
              ? selectedButtonStyle
              : normalButtonStyle
          }
          onClick={() => setSelectedProject(ProjectType.Mobile)}
        >
          <Typography
            component="span"
            variant="body2"
            sx={{ lineHeight: "1.2rem" }}
          >
            {"Mobile"}
          </Typography>
        </Grid>
        <Grid
          key={ProjectType.Web}
          item
          xs={5}
          md={2}
          sx={
            selectedProject === ProjectType.Web
              ? selectedButtonStyle
              : normalButtonStyle
          }
          onClick={() => {
            setSelectedProject(ProjectType.Web);
          }}
        >
          <Typography
            component="span"
            variant="body2"
            sx={{ lineHeight: "1.2rem" }}
          >
            {"Web"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

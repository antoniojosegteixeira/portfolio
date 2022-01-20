import React from "react";
import { Grid, ListItem, Typography, Link, Box } from "@mui/material";

export default function ProjectItem({
  href,
  image,
  title,
  description,
  tools,
}) {
  return (
    <ListItem sx={{ padding: "3rem 0" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: { xs: "center" },
            pl: 2,
          }}
        >
          <Link
            href={href}
            target="_blank"
            onClick={() => window.open(href)}
            sx={{
              position: "relative",
              backgroundColor: "white",
              lineHeight: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& img": {
                transition: "all 0.32s ease-in-out",
              },
              "&:hover": {
                "& img": {
                  opacity: "0.9",
                },
                "& .MuiBox-root": {
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              sx={{
                maxWidth: "570px",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            >
              <img
                src={image}
                alt="Burger Bistro website"
                style={{ width: "100%" }}
              />
            </Box>

            <Box
              sx={{
                opacity: 0,
                position: "absolute",
                backgroundColor: "#0a0c11",
                padding: "1.4rem 2.1rem",
                borderRadius: "80px",
                transition: "all 0.32s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                "& span": {
                  fontSize: "0.9rem",
                },
                "& i": {
                  marginLeft: "10px",
                },
              }}
            >
              <Typography component="span" variant="body1">
                ACESSAR
                <i className="fas fa-external-link-alt"></i>
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
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
          <Typography
            component="h2"
            variant="h3"
            style={{ textTransform: "uppercase" }}
          >
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "start" },

              "& div": {
                border: "1px solid white",
                borderRadius: 2,
                padding: "0.5rem",
                userSelect: "none",
                color: "white",
                width: "fit-content",
                float: "left",
                marginRight: 1,
                marginBottom: 1,
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "black",
                  "& span": {
                    fontWeight: "bold",
                    color: "black",
                  },
                },
              },
            }}
          >
            {tools.map((item) => {
              return (
                <Grid item key={item}>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ lineHeight: "1.2rem" }}
                  >
                    {item}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

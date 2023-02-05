import React from "react";
import {
  Grid,
  ListItem,
  Typography,
  Box,
  Button,
  Link,
  Container,
} from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

export default function DescriptionItem({
  image,
  title,
  description,
  title2,
  description2,
  title3,
  description3,
}) {
  return (
    <ListItem sx={{ padding: { xs: "2rem 0", md: "2rem 0" } }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: { xs: "center" },
            paddingLeft: { md: "16px" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              lineHeight: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "570px",
                backgroundColor: "rgba(0,0,0,0)",
                paddingBottom: "1rem",
              }}
            >
              <img
                src={image}
                alt={description}
                style={{ width: "100%", backgroundColor: "#000" }}
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
            ></Box>
          </Box>
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
          <Box>
            <Typography
              component="h4"
              variant="h4"
              style={{
                fontFamily: "Notosans",
                paddingBottom: "1rem",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </Box>
          {title2 &&
            description2 &&
            generateAdditionalSection(title2, description2)}

          {title3 &&
            description3 &&
            generateAdditionalSection(title3, description3)}

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
          ></Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "start" },
            }}
          ></Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

function generateAdditionalSection(title, description) {
  return (
    <Box>
      <Typography
        component="h4"
        variant="h4"
        style={{
          fontFamily: "Notosans",
          paddingTop: "2rem",
          paddingBottom: "1rem",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}

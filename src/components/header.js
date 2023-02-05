import { rise, appearFromRight } from "../utils/appkeyframes";
import heroVideo from "../videos/herovideo.mp4";
import { Grid, Typography, Box } from "@mui/material";

export function Header() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "102vh",
        zIndex: -1,
        "& video": {
          position: "fixed",
          right: 0,
          top: 0,
          minHeight: "100%",
          minWidth: "100%",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          right: 0,
          top: 0,
          minHeight: "100%",
          minWidth: "100%",
          zIndex: -2,
        }}
      >
        <video autoPlay muted loop id="bg-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "rgba(7, 8, 10, 0.9)",
            zIndex: 10,
            position: "fixed",
            minHeight: "102vh",
            paddingBottom: "2vh",
          }}
        >
          <Grid item>
            <Typography
              variant="h1"
              color="primary"
              align="center"
              sx={{
                opacity: 0,
                margin: "0 1rem",
                fontSize: { md: "7.5rem" },
                fontWeight: { xs: "bold", md: "normal" },
                transform: "translateY(110%)",
                animation: `${rise} 1.3s ease-in-out 0.7s forwards`,
              }}
            >
              ANTÔNIO TEIXEIRA
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              color="primary"
              sx={{
                opacity: 0,
                margin: "0 1rem",
                fontWeight: { xs: "bold", md: "normal" },
                transform: "translateX(110%)",
                animation: `${appearFromRight} 2.1s ease-in-out 1.3s forwards`,
                marginTop: { xs: "1rem", sm: 0 },
                textAlign: { xs: "center", sm: "right" },
                fontSize: { xs: "1.8rem", sm: "2.7rem" },
              }}
            >
              DESENVOLVEDOR FRONT END
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

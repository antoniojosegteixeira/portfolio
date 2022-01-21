import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      color: "#fff",
      h1: {
        fontFamily: ["Bigilla", "cursive"].join(","),
        color: "#fff",
        fontWeight: "bold",
      },
      h2: {
        fontFamily: ["Bigilla", "cursive"].join(","),
        color: "#fff",
        fontWeight: "bold",
      },
      h3: {
        fontFamily: ["Bigilla", "cursive"].join(","),
        color: "#fff",
        fontSize: 38,
        fontWeight: "bold",
      },
      h4: {
        fontFamily: ["Bigilla", "cursive"].join(","),
        color: "#fff",
      },
      h5: {
        fontFamily: ["Bigilla", "cursive"].join(","),
        color: "#fff",
      },
      subtitle1: {
        fontFamily: "Raleway",
        fontSize: "1.25rem",
        fontWeight: "100",
      },
      body1: {
        fontFamily: "Raleway",
        fontSize: "1.10rem",
        fontWeight: "100",
        color: "#fff",
      },
      body2: {
        fontFamily: "Raleway",
        fontSize: "0.9rem",
        fontWeight: "100",
        color: "#fff",
      },
    },
    palette: {
      primary: { main: "#fff" },
      secondary: { main: "#0a0c11" },
      contrastText: "#fff",
    },
  })
);

export default theme;

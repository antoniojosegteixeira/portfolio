import React from "react";
import { Grid, List, Typography, Container, Link, Box } from "@mui/material";
import ProjectItem from "./ProjectItem";
import { ToolIcons } from "./utils/ToolIcons";
import "./utils/style.css";
import { rise, appearFromRight } from "./utils/appkeyframes";
import burgerImg from "./images/burgerplace.webp";
import recipeImg from "./images/recipe.jpg";
import bikeImg from "./images/bike.jpg";
import shortImg from "./images/shortener.jpg";
import heroVideo from "./videos/herovideo.mp4";
import bgLarge from "./images/bgl.jpeg";
import bgMedium from "./images/bgm.jpg";
import bgSmall from "./images/bgs.jpg";

export default function App() {
  const contactIcon = {
    padding: "0 1rem",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.11)",
    },
  };

  return (
    <Box sx={{ p: 0 }}>
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
                DESENVOLVEDOR WEB
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "70vh",
          position: "relative",
          backgroundColor: "black",
          padding: "3rem 0",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item md={7}>
              <Box sx={{ px: { xs: 1, lg: 0 } }}>
                <Typography variant="h1" component="h3" color="primary">
                  SOBRE
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  sx={{ marginTop: "1rem" }}
                >
                  Sou Antônio José Teixeira, um desenvolvedor web de 23 anos.
                  Vivo em Cuiabá - Mato Grosso e sou graduando em Análise e
                  Desenvolvimento de Sistemas.
                </Typography>
                <Typography color="primary" variant="subtitle1">
                  Minha curiosidade sempre me impulsionou a criar coisas novas,
                  aprender e encontrar minha paixão pela tecnologia. Ao criar
                  aplicações sempre foco em entregar a experiência mais
                  agradável possível.
                </Typography>
              </Box>
            </Grid>
            <Grid container item md={5}>
              <Grid
                container
                sx={{
                  justifyContent: { xs: "center", md: "right" },
                  marginTop: { md: "1rem" },
                }}
              >
                {ToolIcons.map((item) => {
                  return (
                    <Grid
                      item
                      key={item.title}
                      sx={{
                        display: "flex",
                        padding: "0.5rem",
                        position: "relative",
                        alignContent: "center",
                        width: "100px",
                        height: "100px",
                        userSelect: "none",
                        justifyContent: "left",
                        alignItems: "center",

                        "& svg, img": {
                          width: "80px",
                          transition: "all 0.3s ease-in-out",
                        },
                        "& .MuiTypography-body1": {
                          position: "absolute",
                          left: 50,
                          top: 50,
                          transform: "translate(-50%, -50%)",
                          transition: "all 0.3s 0.06s ease-in-out",
                          opacity: 0,
                          fontSize: "0.9rem",
                        },

                        "&:hover": {
                          "& svg, img": {
                            opacity: 0,
                          },
                          "& .MuiTypography-body1": {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      {item.e}
                      <Typography component="span" variant="body1">
                        {item.title}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          position: "relative",
          padding: "3rem 0",
          backgroundImage: {
            xs: `linear-gradient(
              0deg,
              rgba(8, 11, 17, 0.7),
              rgba(7, 8, 10, 0.7)
              ),
              url(${bgSmall})`,

            md: `linear-gradient(
              0deg,
              rgba(8, 11, 17, 0.7),
              rgba(7, 8, 10, 0.7)
              ),
              url(${bgMedium})`,

            lg: `linear-gradient(
                0deg,
                rgba(8, 11, 17, 0.7),
                rgba(7, 8, 10, 0.7)
                ),
                url(${bgLarge})`,
          },
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "650px",
        }}
      >
        <Container sx={{ maxWidth: 1000 }}>
          <Typography
            variant="h1"
            component="h3"
            color="primary"
            align="center"
            sx={{ paddingBottom: { md: "1rem" } }}
          >
            PROJETOS
          </Typography>
          <List>
            <ProjectItem
              href="https://antoniojosegteixeira.github.io/burger-place-website/"
              image={burgerImg}
              title="Burger Bistro"
              description="Landing page para uma hamburgueria construída com Bootstrap 5."
              tools={["HTML", "CSS", "Javascript", "Bootstrap"]}
            ></ProjectItem>
            <ProjectItem
              href="https://recipeb0ok.herokuapp.com/"
              image={recipeImg}
              title="Recipe Book"
              description="Site de receitas consumindo a API Spoonacular."
              tools={["React", "NodeJS", "NextJS", "MaterialUI"]}
            ></ProjectItem>
            <ProjectItem
              href="https://burbankbikeshop.herokuapp.com/"
              image={bikeImg}
              title="Burbank Bike Shop"
              description="Loja online de mountain bikes em estilo moderno."
              tools={["React", "NodeJS", "MongoDB", "NextJS", "MaterialUI"]}
            ></ProjectItem>
            <ProjectItem
              href="https://tinyurlshortnr.herokuapp.com/"
              image={shortImg}
              title="URL Shortener"
              description="Encurtador de URL minimalista e prático."
              tools={[
                "HTML",
                "CSS",
                "Bootstrap",
                "Javascript",
                "NodeJS",
                "MongoDB",
              ]}
            ></ProjectItem>
          </List>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(0,0,0)",
          position: "relative",
          padding: "3rem 0 4rem 0 ",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                variant="h1"
                sx={{
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                CONTATO
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "start" },
                  pt: 1,
                }}
              >
                <Link href="https://github.com/antoniojosegteixeira">
                  <Typography sx={contactIcon} align="center" variant="h3">
                    <i className="fab fa-github"></i>
                  </Typography>
                </Link>

                <Link href="https://www.linkedin.com/in/antoniojgteixeira/">
                  <Typography sx={contactIcon} align="center" variant="h3">
                    <i className="fab fa-linkedin"></i>
                  </Typography>
                </Link>

                <Link href="mailto:antoniojosegteixeira@gmail.com">
                  <Typography sx={contactIcon} align="center" variant="h3">
                    <i className="fas fa-envelope"></i>
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                paddingTop: { xs: "2rem", md: "0.5rem" },
                "& .MuiTypography-root": {
                  textAlign: { xs: "center", md: "right" },
                },
              }}
            >
              <Typography>Antônio José G. C. Teixeira</Typography>
              <Typography>Cuiabá, Mato Grosso, Brasil</Typography>
              <Typography>antoniojosegteixeira@gmail.com</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

import { List, Typography, Container, Box } from "@mui/material";

import ProjectItem from "./ProjectItem";
import freeImg from "../images/free.png";
import burgerImg from "../images/burgerplace.jpg";
import recipeImg from "../images/recipe.jpg";
import bikeImg from "../images/bike.jpg";
import vocabuloImg from "../images/vocabulo.jpg";
import shortImg from "../images/shortener.jpg";
import bgLarge from "../images/bgl.jpeg";
import bgMedium from "../images/bgm.jpg";
import bgSmall from "../images/bgs.jpg";

export default function ProjectsSection() {
  return (
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
            href="https://github.com/antoniojosegteixeira/free-fire-location"
            image={freeImg}
            title="Free Fire Location"
            description="Aplicativo em Flutter para localização de incêndios em tempo real. Consome dados de satélites do INPE e NASA, além de prover informações sobre o tempo local. Usuários podem contribuir adicionando ocorrências de incêndio."
            tools={["Flutter", "Bloc/Cubit", "Google APIs", "Firebase", "DDD"]}
            knowMore="free-fire-location"
          ></ProjectItem>
          <ProjectItem
            href="https://antoniojosegteixeira.github.io/burger-place-website/"
            image={burgerImg}
            title="Burger Bistro"
            description="Landing page para uma hamburgueria construída com Bootstrap 5."
            tools={["HTML", "CSS", "SASS", "Javascript", "Bootstrap"]}
          ></ProjectItem>
          <ProjectItem
            href="https://recipeb0ok.herokuapp.com/"
            image={recipeImg}
            title="Recipe Book"
            description="Site de receitas consumindo a API Spoonacular. Possui sistema de favoritos baseado em cookies."
            tools={["React", "NodeJS", "NextJS", "MaterialUI"]}
          ></ProjectItem>
        </List>
      </Container>
    </Box>
  );
}

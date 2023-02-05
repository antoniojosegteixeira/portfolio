import { List, Typography, Container, Box } from "@mui/material";

import ProjectItem from "./ProjectItem";
import findPetImg from "../images/find1.png";
import freeImg from "../images/free.png";
import burgerImg from "../images/burgerplace.jpg";
import recipeImg from "../images/recipe.jpg";
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
            tools={[
              "Flutter",
              "Bloc/Cubit",
              "Google APIs",
              "Firebase",
              "Google Cloud Functions",
              "DDD",
            ]}
            knowMore="free-fire-location"
          ></ProjectItem>
          <ProjectItem
            href="https://github.com/antoniojosegteixeira/find_pet_flutter"
            image={findPetImg}
            title="FindPet (Em construção)"
            description="Aplicativo em Flutter para localização de animais de estimação perdidos. Possui backend em Django Rest Framework."
            tools={[
              "Flutter",
              "Bloc/Cubit",
              "Django Rest Framework",
              "Clean Architecture",
            ]}
          ></ProjectItem>
        </List>
      </Container>
    </Box>
  );
}

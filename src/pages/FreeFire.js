import {
  List,
  Typography,
  Container,
  Box,
  Grid,
  Link,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import DescriptionItem from "../components/DescriptionItem";

import ff1 from "../images/ff1.png";
import ff2 from "../images/ff2.png";
import ff3 from "../images/ff3.png";
import ff4 from "../images/ff4.png";

import fireImg from "../images/fireImg.png";
import freeImg from "../images/free.png";
import bgLarge from "../images/bgl.jpeg";
import bgMedium from "../images/bgm.jpg";
import bgSmall from "../images/bgs.jpg";
import Footer from "../components/footer";

export default function FreeFire() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ p: 0 }}>
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
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
            <img src={fireImg} style={{ maxWidth: "100px" }} />
          </Box>

          <Typography
            variant="h3"
            component="h3"
            color="primary"
            align="center"
            sx={{
              paddingBottom: { md: "0.5rem" },
              paddingTop: "1.8rem",
              fontFamily: "Notosans",
            }}
          >
            FREE FIRE LOCATION
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
            <Link
              href="https://github.com/antoniojosegteixeira/free-fire-location"
              underline="none"
            >
              <Button>
                <Typography
                  sx={{
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.11)",
                    },
                  }}
                  align="center"
                  variant="h3"
                >
                  <i className="fab fa-github"></i>
                </Typography>
                <Typography
                  variant="subtitle"
                  component="subtitle"
                  color="primary"
                  align="center"
                  sx={{
                    paddingLeft: "0.5rem",
                    paddingTop: "0.5rem",
                    fontFamily: "Notosans",
                  }}
                >
                  Acesse o repositório
                </Typography>
              </Button>
            </Link>
          </Box>

          <List>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item sm={11} md={10} lg={9}>
                <Typography
                  variant="h4"
                  component="h4"
                  color="primary"
                  sx={{
                    paddingBottom: { xs: "1rem", md: "2.5rem" },
                    paddingTop: "1rem",
                    fontFamily: "Notosans",
                  }}
                >
                  Proposta
                </Typography>

                <Typography
                  variant="body"
                  component="body"
                  color="primary"
                  sx={{
                    paddingBottom: "1rem",
                    fontFamily: "Notosans",
                  }}
                >
                  FreeFireLocation é um aplicativo em Flutter para localização
                  de incêndios em tempo real. Consome dados de satélites do INPE
                  e NASA, além de prover informações sobre o tempo local.
                  Usuários podem contribuir adicionando ocorrências de incêndio.
                </Typography>
                <Typography
                  variant="body"
                  component="body"
                  color="primary"
                  sx={{
                    paddingBottom: "1rem",
                    fontFamily: "Notosans",
                  }}
                >
                  É construído em padrão DDD (Domain Driven Design). As injeções
                  de dependência são gerenciadas por GetIt e o gerenciador de
                  estados de escolha foi Cubit. Seu back-end é construído em
                  Firebase. Testes unitários foram realizados utilizando
                  Mockito.
                </Typography>
              </Grid>
            </Grid>

            <DescriptionItem
              image={ff1}
              title="Google Maps"
              description="O aplicativo consome a biblioteca oficial do Google Maps para Flutter. É possível escolher entre diferentes camadas, com visualizações de terreno, localidades, divisas geográficas e satélite."
              title2="Google Places"
              description2="A busca por localidades é construída a partir da API Google Places. Permite a busca de cidades, estados e outros marcos geográficos."
              title3="Place Autocomplete"
              description3="A barra de pesquisas possui sistema de autocomplete implementado através da Place Autocomplete API."
            ></DescriptionItem>
            <DescriptionItem
              image={ff2}
              title="INPE e NASA"
              description="Os dados de incêndio e focos de calor provém das APIs do INPE (Instituto Nacional de Pesquisas Espaciais) e NASA (National Aeronautics and Space Administration). As informações são atualizadas em tempo real."
            ></DescriptionItem>
            <DescriptionItem
              image={ff3}
              title="WeatherAPI"
              description="Ao selecionar um foco de incêndio recebemos informações do tempo no local, a temperatura, direção do vento e probabilidade de chuva. As informações são provenientes da WeatherAPI."
              title2="Geolocator"
              description2="O aplicativo também possui suporte para geolocalização do usuário através do package Geolocator. Basta um clique no ícone de localização para centralizar o mapa no usuário."
            ></DescriptionItem>
            <DescriptionItem
              image={ff4}
              title="Firebase"
              description="O usuário pode contribuir reportando ocorrências de incêndios. Basta pressionar a tela por alguns segundos para gerar o registro. Os dados serão gravados utilizando Firebase e Firestore."
              title2="Google Cloud Functions"
              description2="Para gerenciar as ocorrências de incêndios no banco de dados é utilizado Google Cloud Functions"
            ></DescriptionItem>
          </List>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

import { Grid, Typography, Container, Box } from "@mui/material";
import { ToolIcons } from "../utils/ToolIcons";



export default function Myself() {
	return <Box
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
			  Sou Antônio José Teixeira, desenvolvedor front-end.
			  Tenho 24 anos e vivo em Cuiabá, Mato Grosso, atualmente graduando em Análise e
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
}
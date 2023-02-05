import { Grid, Typography, Link, Box, Container } from "@mui/material";


export default function Footer() {
	const contactIcon = {
		padding: "0 1rem",
		transition: "all 0.3s ease-in-out",
		"&:hover": {
		  transform: "scale(1.11)",
		},
	  };
	  
	return <Box
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
			  lineHeight: 1,
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
}

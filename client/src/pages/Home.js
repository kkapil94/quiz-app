import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Box id="Home" sx={{ position: "absolute", top: "4rem",width:'100%',backgroundColor:"#EFF6FE",paddingTop:"2rem"}}>
    
        <Grid container sx={{marginBottom:"2rem"}}>
          <Grid item xs={6} justify="center" >
            <Typography variant="h3" sx={{padding:"4rem 4rem 2rem 4rem",fontWeight:'bolder',fontFamily:"montserrat,sans-serif" }}>
              Easy and intuitive online testing.
            </Typography>
            <Typography variant="subtile1"  sx={{fontWeight:'bolder',fontFamily:"montserrat,sans-serif",color:'grey'}}>
              <div style={{padding:"0 4rem 0 4rem" }}>This is an online quiz for  you,to check your knowledge. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga provident dolore facere laboriosam nobis 
              </div>
              <Button variant="contained" sx={{margin:'4rem',textTransform:'none'}}><Link to='Categories' smooth='1' duration='500'>Take a quiz</Link></Button>
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{padding:'2rem 0rem 0 3rem'}}>
            <img src="./images/poster.png" alt="" style={{width:"35rem"}}/>
          </Grid>
        </Grid>
        <Container>
      <Categories/>
        </Container>
      <Footer/>
      </Box>
    </>
  );
}

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../index.css'
export default function Home() {
  return (
    <>
      <Navbar />
      <Box id="Home" sx={{ position: "absolute", top: "4rem",width:'100%',backgroundColor:"#EFF6FE",paddingTop:"2rem",overflow:'hidden'}}>
    
        <Grid id = 'container' container sx={{marginBottom:"2rem"}}>
          <Grid id='ele1' item xs={12} lg={6} md={6} justify="center" >
            <Typography id="postText" variant="h3" sx={{padding:"4rem 4rem 2rem 4rem",fontWeight:'bolder',fontFamily:"montserrat,sans-serif",fontSize:'3rem' }}>
              Easy and intuitive online testing.
            </Typography>
            <Typography id='postSub' variant="subtile1"  sx={{fontWeight:'bolder',fontFamily:"montserrat,sans-serif",color:'grey'}}>
              <Typography id='quizText' className='quizText' sx={{padding:'0 4rem',fontSize:{xl:'1.5rem'}}}>This is an online quiz for  you,to check your knowledge. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga provident dolore facere laboriosam nobis 
              </Typography>
              <Button id="quizButton" variant="contained" sx={{margin:'4rem',textTransform:'none'}}><Link to='Categories' smooth='1' duration='500'>Take a quiz</Link></Button>
            </Typography>
          </Grid>
          <Grid id='ele2' item xs={12} lg={6} md={6} sx={{padding:'2rem 0rem 0 3rem'}}>
            <img id="homPost" src="./images/poster.png" alt="" style={{width:'82%'}}/>
          </Grid>
        </Grid>
        <Container  sx={{minWidth:'100vw'}}>
      <Categories/>
        </Container>
      <Footer/>
      </Box>
    </>
  );
}

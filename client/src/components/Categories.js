import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React, { useState} from "react";
import useStore from "../store/store";
import CatPop from "./CatPop";
import '../index.css'
export default function Categories() {
  const categories = [
    {id:"1",name:"Art & Literature",header:'art_and_literature',img:"./images/Artnlit.webp"},
    {id:"2",name:"Film & TV",img:"./images/film.avif",header:"film_and_tv"},
    {id:"3",name:"Food & drink",img:"./images/food-drink-banner.jpg",header:"food_and_drink"},
    {id:"4",name:"Geography",img:"./images/geo.jpg",header:"geography"},
    {id:"5",name:"General Knowledge",img:"./images/gk.png",header:"general_knowledge"},
    {id:"6",name:"History",img:"./images/history.jpg",header:"history"},
    {id:"7",name:"Music",img:"./images/music.webp",header:"music"},
    {id:"8",name:"Science",img:"./images/scienece.jpg",header:"science"},
    {id:"9",name:"Society & Culture",img:"./images/society-and-culture.jpg",header:"society_and_culture"},
    {id:"10",name:"Sport & Leisure",img:"./images/sport.jpg",header:"sport_and_leisure"}
  ]
  const [trigger, setTrigger] = useState()
  const det = useStore(state=>state.Det)
  console.log(det)
  const setData = useStore(state=>state.setDet)
  const handleClick = (img,category,header)=>{
    console.log("i am clicked",header)
    setTrigger(true)
    setData({img,category,header})
  }
  
  return (
    <>
    <Box id='Categories'>
    <CatPop trigger={trigger} setTrigger={setTrigger} det={det}/>
    <Typography  id='catText' variant="h4" component={"div"} sx={{fontFamily:"Montserrat,sans-serrif",marginTop:"6rem"}}>Explore By Category</Typography>
    <Stack direction={"row"} alignItems='center' justifyContent={'center'} sx={{width:"100%",marginTop:"2rem",flexWrap:"wrap"}}>
    {categories.map((category)=>(
      <Card id="catCard" key={category.id} sx={{ margin:'1rem',width:'16rem' }} onClick={()=>handleClick(category.img,category.name,category.header)}>
        <CardActionArea>
          <CardMedia id='catImage' component="img" height="140" image={category.img}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Montserrat,sans-serrif"}}>
                {category.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
    </Stack>
    </Box>
    </>
  );
}

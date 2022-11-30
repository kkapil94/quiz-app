import React, { useState } from 'react'
import {Badge, Box, Button, Card, CardActions, CardContent, Container, Typography} from '@mui/material'
import useStore from '../store/store'
import Ques from '../components/Ques';
export default function Quiz() {
  const [dis,setDis] = useState(false)
    const urlDet = useStore(state=>(state.urlDet[0]));
    console.log("uel",urlDet)
    const Det = useStore(state=>(state.Det[0]))
    console.log("i amm",Det) 
  return !dis? (
        <Box sx={{position:'absolute',top:'4rem',width:'100vw',height:'calc(100vh - 4rem)',background:"#dcede6"}}>
            <Container maxWidth="lg"  sx={{display:'flex',alignItems:'center',justifyContent:'center',height:"100%"}}>
              <Box sx={{height:'80%',width:'70%' , background:`hsl(0deg 0% 100%) url(${Det.img}) no-repeat center center/cover`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Badge  badgeContent={Det.category } sx={{"& .MuiBadge-badge": {height:"1.8rem",width:'10rem',margin:'0 8.9rem 0 0',background:'hsl(210deg 60% 98%)',fontSize:'1rem',paddingBottom:'1rem',paddingTop:'1rem'}}} >
                <Card sx={{maxWidth:'18rem',minHeight:"12rem",borderRadius:'1rem'}}>
                  <CardContent>
                    <Typography variant="h4" textAlign='center' sx={{fonyFamily:"montserrat,sans-serrif",marginTop:'1rem',padding:"0 1rem"}}>Quiz for {Det.category}</Typography>
                  
                  <CardActions>
                    <Button variant='contained' size='large' sx={{width:'100%',margin:'1rem'}} onClick={()=>setDis(true)}>Start</Button>
                  </CardActions>
                  <Typography variant='subtitle6' sx={{marginTop:'4rem'}}>{urlDet.num} questions</Typography>
                  </CardContent>
                </Card>
                </Badge>
              </Box>
            </Container>
        </Box>
  ):<Ques/>
}

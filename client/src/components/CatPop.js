import {Box,Button,Card,CardActions,CardContent,CardMedia,IconButton,MenuItem,TextField,Typography,} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import '../index.css'
export default function CatPop(props) {
  const [apidet, setApidet] = useState({num:'5',diff:'easy',category:''})
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate()
  const difficulties = [
    {
      value: 'easy',
      label: 'Easy',
    },
    {
      value: 'medium',
      label: 'Medium',
    },
    {
      value: 'hard',
      label: 'Hard',
    },
  ];
  const addDet = useStore((state)=>state.apiDet)
  const onSubmit = (e)=>{
    props.setTrigger(false)
    navigate("/quiz")
    addDet(apidet)
  }
  
  console.log(apidet)
  return props.trigger ? ( 
    <Box sx={{ width: "100vw", height: "100vh", background: "rgb(9 9 9 / 80%)", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card id='cateCard'  sx={{ minWidth: '20rem'}}>
            <IconButton onClick={(e) => props.setTrigger(false)} sx={{position:'relative',margin:'.5rem 0 .5rem 90%'}}>
                  <CloseIcon/>
            </IconButton>
        <CardMedia id="catPopImg" component={"img"} height="250"  image={props.det[0].img} sx={{width:"100%"}}/>
        <CardContent>
          <form action="" style={{ display: "flex", flexDirection: "column" }} >
            <Box id="inputDiv1" sx={{ margin: "1rem" }}>
              <Typography
                id="para"
                variant="h5"
                sx={{ display: "inline-block", margin: "8px" ,fontFamily:"Montserrat,sans-serrif"}}
              >
                No. of questions :{" "}
              </Typography>
              <TextField id="input" variant="outlined" type={"number"} value={apidet.num} inputProps={{ min:5,max:30 }} sx={{width:{lg:'14.1rem',md:'14.1rem',sm:'45%',xs:'40%'}}} onChange={(e)=>{setApidet({...apidet,num:e.target.value,category:props.det[0].category})}}/>
            </Box>
            <Box id="inputDiv2" sx={{ margin: "1rem" }}>
              <Typography
                id='para'
                variant="h5"
                sx={{ display: "inline-block", margin: "8px",fontFamily:"Montserrat,sans-serrif"}}
              >
                Select Difficulty  :
              </Typography>
              <TextField id="input" select value={difficulty} onChange={(e)=>{setDifficulty(e.target.value);setApidet({...apidet,diff:e.target.value,category:props.det[0].category})}} sx={{width:{lg:'14.1rem',md:'14.1rem',sm:'44%',xs:'40%'},marginLeft:"10px"}}>
                {difficulties.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </form>
          <CardActions>
            <Button variant="contained" type="submit" onClick={onSubmit} sx={{flexGrow:1}}>
              Submit
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  ) : (
    ""
  );
}

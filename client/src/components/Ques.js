import { Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Container, Typography } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import useStore from '../store/store'
import Result from './Result'
export default function Ques() {
  const [ques,setQues] = useState('')
  const [isLoad,setIsLoad] = useState(true)
  const [index,setIndex] = useState(0)
  const [disable,setDisable] = useState(0)
  const [display,setDisplay] = useState('none')
  const [num,setNum] = useState(1)
  const [score,setScore] = useState(0)
  const [result,setResult] = useState(0)
  const [correct,setCorrect] = useState(0)
  const [choice,setChoice] = useState(2)
  const style = {width:{lg:'18rem',md:'17rem',sm:'100%',xs:'100%'},'&:hover':{border:'3px solid hsl(210deg 78% 25%)',background:'hsla(var(--qc-blue-100-h), var(--qc-blue-100-s), calc(var(--qc-blue-100-l) + 62%))'},border:"3px solid hsl(212deg 100% 90%)",marginBottom:'1rem'}
  const urlDet = useStore(state=>state.urlDet)
  const apiDet = useStore(state=>state.Det)
  const url = `https://the-trivia-api.com/api/questions?categories=${apiDet[0].header}&limit=${urlDet[0].num}&difficulty=${urlDet[0].diff}`
  const option = useRef(null)
  const option2 = useRef(null)
  const option3 = useRef(null)
  const option4 = useRef(null)
  const fetchApi = async (url)=>{
    setIsLoad(true)
    const res = await fetch(url)
    const data = await res.json()
    setQues(data)
    setIsLoad(false)
  }
  const handleClick = (e)=>{
    if(e.target.value===ques[index].correctAnswer){
        e.target.style.border='3px solid hsl(157deg 100% 24%)'
        e.target.style.backgroundColor='hsl(0deg 0% 100%)'
        e.target.style.color='#000'
        e.target.style.fontWeight='bolder'
        setDisable(true)
        if(num<=urlDet[0].num){
          setDisplay('inlineFlex')
          }
          setCorrect(correct+1)
        setScore(score + 100)
    }
    else if(e.target.value!==ques[index].correctAnswer){
        e.target.style.border='3px solid hsl(0deg 64% 37%)'
        e.target.style.background='#f2eff2'
        e.target.style.color='#000'
        e.target.style.fontWeight='bolder'
      if(choice===0){
        option.current.style.border='3px solid hsl(157deg 100% 24%)'
        option.current.style.background='hsl(0deg 0% 100%)'
        option.current.style.color='#000'
        option.current.style.fontWeight='bolder'
      }
      else if(choice===1){
        option2.current.style.border='3px solid hsl(157deg 100% 24%)'
        option2.current.style.background='hsl(0deg 0% 100%)'
        option2.current.style.color='#000'
        option2.current.style.fontWeight='bolder'
      }
      else if(choice===2){
        option3.current.style.border='3px solid hsl(157deg 100% 24%)'
        option3.current.style.background='hsl(0deg 0% 100%)'
        option3.current.style.color='#000'
        option3.current.style.fontWeight='bolder'
      }
      else{
        option4.current.style.border='3px solid hsl(157deg 100% 24%)'
        option4.current.style.background='hsl(0deg 0% 100%)'
        option4.current.style.color='#000'
        option4.current.style.fontWeight='bolder'
      }
        setDisable(true)
        if(num<=urlDet[0].num){
        setDisplay('inlineFlex')
        }
        else{
          setDisplay(display)
        }
    }

  }
  let opt1,opt2,opt3,opt4;
  const options = ()=>{
  if(choice === 0){
    opt1 = ques[index].correctAnswer;
    opt2 = ques[index].incorrectAnswers[0]
    opt3 = ques[index].incorrectAnswers[1]
    opt4 = ques[index].incorrectAnswers[2]
  }  
  else if(choice === 1){
    opt1 = ques[index].incorrectAnswers[0]
    opt2 = ques[index].correctAnswer;
    opt3 = ques[index].incorrectAnswers[1]
    opt4 = ques[index].incorrectAnswers[2]
  }  
  else if(choice === 2){
    opt1 = ques[index].incorrectAnswers[1]
    opt2 = ques[index].incorrectAnswers[0]
    opt3 = ques[index].correctAnswer;
    opt4 = ques[index].incorrectAnswers[2]
  }  
  else {
    opt1 = ques[index].incorrectAnswers[0]
    opt2 = ques[index].incorrectAnswers[1]
    opt3 = ques[index].incorrectAnswers[2]
    opt4 = ques[index].correctAnswer;
  }  

  }
  const handleClick2 = ()=>{
    setNum(num + 1)
    setIndex(index + 1)
    setDisable(0)
    option.current.style={style}
    option2.current.style={style}
    option3.current.style={style}
    option4.current.style={style}
    setDisplay('none')
    setChoice(Math.floor(Math.random()*4))
  }

  const handleClick3 = ()=>{
    setResult(1)
  }

  useEffect(() => {
    fetchApi(url)
    setDisable(0)
    setDisplay('none')
},[url])

  return !isLoad?(
    <>{options()}
       {!result? (<Box sx={{position:'absolute',top:'4rem',width:'100vw',height:'calc(100vh - 4rem)'}}>
         <Container maxWidth="lg"  sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
            <Card sx={{minHeight:'50%',width:{lg:'70%',md:'70%',sm:'100vw',xs:'100vw'} ,display:'flex',  alignItems:'center',justifyContent:'center',flexDirection:'column',boxShadow:"0 0 16px rgba(0, 0, 0, 0.16)",border:'1px solid hsl(212deg 100% 90%)'}}>
                <CardHeader title={<><Typography variant={'h6'} sx={{flexGrow:1,background:'#fff'}}>{apiDet[0].category} Quiz  </Typography><Typography variant='h6' sx={{marginTop:'.5rem'}}>{num} of {urlDet[0].num}</Typography></>} sx={{margin:0, borderBottom:'1px solid hsl(212deg 100% 90%)',width:'100%'}} action={<Typography variant='h6'>Score : {score}</Typography>} />
                <CardContent sx={{background:'hsl(210deg 60% 98%)'}}>
                    <Typography variant='h6' align='center' sx={{margin:{lg:'0 0 3rem 0',md:'0 0 2rem 0',sm:'0 0 1rem 0',xs:'0 0 0.5rem 0'}}}>{ques[index].question}</Typography>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',margin:{lg:'0 2rem 0 2rem',md:'0',sm:'0',xs:'0'},flexWrap:'wrap',borderBottom:{lg:'2px solid hsl(212deg 100% 90%)'}}}>
                        <Button id='options' variant='outlined' size='large' disabled={disable} ref={option} onClick={handleClick} sx={style} value={opt1}>{opt1}</Button>
                        <Button id='options' variant='outlined' size='large' disabled={disable} ref={option2} onClick={handleClick} sx={style} value={opt2}>{opt2}</Button>
                        <Button id='options' variant='outlined'size='large' disabled={disable} ref={option3}  onClick={handleClick} sx={style} value={opt3}>{opt3}</Button>
                        <Button id='options' variant='outlined' size='large' disabled={disable} ref={option4} onClick={handleClick} sx={style} value={opt4}>{opt4}</Button>
                    </Box>
                    <CardActions sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    
                      {// eslint-disable-next-line
                      !(num==urlDet[0].num)?(<Button variant='outlined' sx={{display}} onClick={handleClick2}>Next</Button>):(<Button variant='outlined' sx={{display}} onClick={handleClick3}>Result</Button>)}
                    </CardActions>
                </CardContent>
            </Card>
        </Container>
        </Box>):<Result correct={correct} score={score}/>}
    </>
  ):<Box sx={{position:'absolute',top:'4rem',width:'100vw',height:'calc(100vh - 4rem)',display:'flex',alignItems:"center",justifyContent:'center'}}><CircularProgress/></Box>
}

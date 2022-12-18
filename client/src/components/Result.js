import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStore from '../store/store';
import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';

function CircularProgressWithLabel(props) {
    const [score,setScore]=React.useState(0)
    const urlDet = useStore(state=>state.urlDet)
  return (
    <Card sx={{background:'aliceblue',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'25rem'}}>
        <CardHeader title="Score"/>
        <CardContent>
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} size={250} thickness={3} sx={{zIndex:1}}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="#1976d2" >
          <Typography variant='h3' sx={{fontWeight:'600'}}>{props.correct}/{urlDet[0].num}</Typography>
          {`${props.score} points`}
        </Typography>
      </Box>
    </Box>
    </CardContent>
    <CardActions>
        <Button variant='contained' ><Link to='/' style={{textDecoration:'none',color:'#fff'}}>Play Again</Link></Button>
    </CardActions>
    </Card>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({correct,score}) {
    const urlDet = useStore(state=>state.urlDet)
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {

   setProgress((correct/urlDet[0].num)*100)
  }, []);

  return <Box sx={{position:'absolute',top:'4rem',width:'100vw',height:'calc(100vh - 4rem)' ,display:'flex',alignItems:'center',justifyContent:'center'}}>
    <CircularProgressWithLabel value={progress} score={score} correct={correct}/>
    </Box>;
}
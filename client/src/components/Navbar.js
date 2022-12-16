import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../index.css'
import {Link} from 'react-scroll'
import {Link as Links} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Drawer, Stack } from '@mui/material';
function Navbar() {

    const navItems = ['Home' , 'Categories' , 'Contact Us']
    const [ham,setHam] = useState(false)
    const handleHam = ()=>{
      if(ham){
        setHam(false)
      }
      else{
        setHam(true)
      }
    }
  return (<>
    <Box sx={{ display: 'flex',zIndex:1,overflow:'hidden'}}>
      <AppBar component="nav"  sx={{backgroundColor:"#EFF6FE",zIndex:1}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color:"#000",fontWeight:"600",cursor:'pointer',fontSize:{xl:'2rem'} }}
          >
           <Link to='Home' smooth='true' duration='500'><Links to='/' style={{textDecoration:'none',color:'#000'}}>Quizzz</Links></Link>
          </Typography>
          <Box id='menu' sx={{marginRight:"2rem"}}>
            {navItems.map((item) => (
              <Button key={item} sx={{color: '#000',marginRight:'1rem',textTransform:'none',fontFamily: 'Montserrat, sans-serif',fontWeight:"600",fontSize:{xl:'1.1rem'}}}>
                <Link to={item} smooth={true} duration={500}><Links to='/' style={{textDecoration:'none',color:'#000'}}>{item}</Links></Link>
              </Button>
            ))}
          </Box>
                <Button  sx={{color: '#000',textTransform:'none',fontFamily: 'Montserrat, sans-serif',fontWeight:"600"}}>
                    Login<OpenInNewIcon sx={{fontSize:"medium"}}/>   
                </Button>
                <Button id='hamburger' onClick={handleHam}  sx={{color: '#000',textTransform:'none',display:'none',margin:'.5rem 0 0 1rem',fontFamily: 'Montserrat, sans-serif',fontWeight:"600",padding:'0',minWidth:'0'}}>
                    <MenuIcon fontSize='medium'/>   
                </Button>
                
        </Toolbar>
      </AppBar>
      </Box>
              <Drawer open={ham} onClose={()=>{setHam(false)}} anchor='right' >
              <Box id='ham' sx={{marginRight:"2rem"}} width='15rem'>
               {navItems.map((item) => (
                <Stack direction='column' justifyContent='flex-start'>
              <Button key={item} sx={{color: '#000',margin:'1.5rem',textTransform:'none',fontFamily: 'Montserrat, sans-serif',fontWeight:"600"}} >
                <Link to={item} smooth={true} duration={500} onClick={handleHam}><Links to='/' style={{textDecoration:'none',color:'#000'}}>{item}</Links></Link>
              </Button>
              </Stack>
            ))}
          </Box>
              </Drawer>
          </>
  );
}


export default Navbar;
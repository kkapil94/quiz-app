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

function Navbar() {

    const navItems = ['Home' , 'Categories' , 'Contact Us']

  return (
    <Box sx={{ display: 'flex',zIndex:1}}>
      <AppBar component="nav"  sx={{backgroundColor:"#EFF6FE",zIndex:1}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color:"#000",fontWeight:"600",cursor:'pointer' }}
          >
           <Link to='Home' smooth='true' duration='500'><Links to='/' style={{textDecoration:'none',color:'#000'}}>Quizzz</Links></Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' },marginRight:"2rem" }}>
            {navItems.map((item) => (
              <Button key={item} sx={{color: '#000',marginRight:'1rem',textTransform:'none',fontFamily: 'Montserrat, sans-serif',fontWeight:"600"}}>
                <Link to={item} smooth={true} duration={500}><Links to='/' style={{textDecoration:'none',color:'#000'}}>{item}</Links></Link>
              </Button>
            ))}
          </Box>
                <Button  sx={{color: '#000',marginRight:'1rem',textTransform:'none',fontFamily: 'Montserrat, sans-serif',fontWeight:"600"}}>
                    Login<OpenInNewIcon sx={{fontSize:"medium"}}/>   
                </Button>
        </Toolbar>
      </AppBar>
      </Box>
  );
}


export default Navbar;
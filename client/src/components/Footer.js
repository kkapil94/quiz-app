import { Box, IconButton, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react'

export default function Footer() {
  return (
    <>
        <Box height='60vh' id='Contact Us' sx={{display:'flex',alignItems:'center',justifyContent:'center',background:'#354978',flexDirection:'column'}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src="./images/pngegg.png" alt='' style={{width:'4rem',background:'#354978'}} />
                <Typography  variant={'h6'} sx={{color:'#fff',fontSize:{xl:'1.5rem'}}}>Quizzz</Typography>
            </Box>
            <Box display="flex" alignItems='center' justifyContent='center' sx={{margin:'1rem'}}>
                <IconButton sx={{padding:0,margin:'0.5rem'}}>
                    <FacebookIcon sx={{fontSize:{lg:'1.5rem',xl:'2.2rem'},color:'#000',background:'#fff',borderRadius:'50%'}} />
                </IconButton>
                <IconButton sx={{padding:0,margin:'0.5rem'}}>
                 <TwitterIcon sx={{fontSize:{lg:'1.5rem',xl:'2.2rem'},color:'#000',background:'#fff',borderRadius:'50%'}}/>
                </IconButton>
                <IconButton sx={{padding:0,margin:'0.5rem'}}>
                <PinterestIcon sx={{fontSize:{lg:'1.5rem',xl:'2.2rem'},color:'#000',background:'#fff',borderRadius:'50%'}}/>
                </IconButton>
                <IconButton sx={{padding:0,margin:'0.5rem'}}>
                <WhatsAppIcon sx={{fontSize:{lg:'1.5rem',xl:'2.2rem'},color:'#000',background:'#fff',borderRadius:'50%'}}/>
                </IconButton>
            </Box>
            <Typography variant='subtitle2' sx={{color:"#fff"}}>© Quizzz All Right Reserved By KK Theme</Typography>
        </Box>
    </>
  )
}

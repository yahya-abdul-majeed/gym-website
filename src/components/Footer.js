import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box bgcolor='#fff3f4' mt='80px'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo}  alt='logo' width='200px' height='40px'/>
        <Typography variant='h5' pb='40px' mt='20px'>
        Made with love by Yahya
      </Typography>
      </Stack>
      
    </Box>
  )
}

export default Footer
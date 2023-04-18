import React, { FC } from 'react'
import { Typography, Container, Grid, Box } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'

import { Button } from '@/components/button/'



const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{
      backgroundImage: 'url(/images/studio_tag_line.jpg)', backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'display-flex',
      alignItems: 'center'
    }}>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.75);",
          boxSizing: 'border-box',
          m: { xs: 10, md: 7 },
          ml: { xs: 10, md: 0 },
          mr: { xs: 10, md: 100 },
          p: { xs: 10, md: 7 },
          pl: { xs: 10, md: 13 }

        }}>
        <Typography variant='Heading1'>
          Our <Typography variant='Heading1' sx={{ color: '#05356D' }}>
            participation
          </Typography> is <br /> your victory</Typography>
        <br />

        <Box sx={{ mt: { xs: 1, md: 2 } }}><Typography variant='Paragraph1_light'>
          Photography is a way to feel, touch, love. What you caught on film is captured forever...the film remembers little things, keeps the memory of little things even when you have forgotten everything...</Typography></Box>
        <br />
        <Button />
      </Box>
    </Box>
  )
}

export default HomeHero

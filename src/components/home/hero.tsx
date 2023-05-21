import React, { FC } from 'react'
import { Typography, useMediaQuery, Box } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'

import { Button } from '@/components/button/'



const HomeHero: FC = () => {

  return (
    <Box id="hero" sx={{
      backgroundImage: 'url(/images/studio_tag_line.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '65vh',
      display: 'flex',
      flexDirection: 'display-flex',
      alignItems: 'center'
    }}>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.75);",
          boxSizing: 'border-box',
          m: { md: 7 },
          ml: { md: 0 },
          mr: { md: 75 },
          p: { xs: 2, md: 7, sm: 3, },
          pl: { sm: 10, md: 13 },
        }}>
        <Typography variant='Heading1' sx={{ fontSize: { xs: 27, sm: 35, md: 58 } }}  >
          Our <Typography variant='Heading1' component={'text'} sx={{ color: '#05356D', fontSize: { xs: 27, sm: 35, md: 58 } }}>
            participation
          </Typography > is
          <br />
          your victory</Typography>
        <br />

        <Box sx={{ mt: { xs: 1, md: 2 } }} ><Typography variant='Paragraph1_light' sx={{ fontSize: { xs: 18, sm: 23, } }} >
          Photography is a way to feel, touch, love. What you caught on film is captured forever...the film remembers little things, keeps the memory of little things even when you have forgotten everything...</Typography>
        </Box>
        <br />
        <Button />
      </Box>
    </Box>
  )
}

export default HomeHero

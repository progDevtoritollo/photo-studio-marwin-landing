import React, { FC } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

import instagram from './image/skill-icons_instagram.png'
import facebook from './image/logos_facebook.png'
import telegram from './image/logos_telegram.png'
import whatsapp from './image/logos_whatsapp-icon.png'


const Messenger: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'row',
        mr: { xs: 3, md: 1 },
        mt: { xs: 0.2, md: 0.5 }
      }}>
      <Box
        sx={{
          mr: { xs: 3, md: 1 },
        }}><Image
          src={instagram} alt="instagram" /></Box>
      <Box
        sx={{
          mr: { xs: 3, md: 1 },
        }}><Image src={whatsapp} alt="whatsapp" /></Box>
      <Box
        sx={{
          mr: { xs: 3, md: 1 },
        }}><Image src={telegram} alt="telegram" /></Box>
      <Box
        sx={{
          mr: { xs: 3, md: 1 },
        }}><Image src={facebook} alt="facebook" /></Box>
    </Box>
  )
}

export default Messenger

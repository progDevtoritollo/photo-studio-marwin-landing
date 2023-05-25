import React, { FC } from 'react'
import { Box, Typography, } from '@mui/material';

import { Messengers } from '@/components/messengers'


const Contacts: FC = () => {
  return (
    <>
      <Box sx={{
        display: 'flex', flexDirection: 'column',
        // mr: { xs: 2, md: 20 },
      }}>
        <Typography variant='Heading4_with_line' sx={{
          fontSize: { xs: 14, sm: 23, }
        }} >
          Contacts
        </Typography>
        <Box sx={{
          display: 'flex', flexDirection: 'column', pb: { xs: 1, md: 1 },
        }}>
          <Typography variant='Paragraph1_regular'
            sx={{
              fontSize: { xs: 13.5, sm: 23, },
            }}>+380 93 365 12 56
          </Typography>
          <Typography variant='Paragraph1_regular' sx={{
            fontSize: { xs: 13.5, sm: 23, },
          }}>+380 50 395 18 92
          </Typography>
        </Box>
        <Messengers />
      </Box>
    </>
  )
}

export default Contacts

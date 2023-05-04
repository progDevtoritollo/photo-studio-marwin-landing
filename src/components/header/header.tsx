import React, { FC } from 'react'

import { Navigation } from '@/components/navigation';
import { Box } from '@mui/material';
import { Logo } from '../logo';


const Header: FC = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 auto',
        height: '150px',
        // boxSizing: 'content-box',
        p: { xs: 2, md: 6 },
      }}>

        <Box sx={{
          mr: { xs: 2, md: 25 },
        }} ><Logo /></Box>

        <Navigation />
      </Box >
    </>
  )
}

export default Header

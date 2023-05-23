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
        height: { xs: '100px', sm: '100px', md: '150px' },
        p: { xs: 1, sm: 2, md: 6 },
      }}>
        <Logo />
        <Navigation />
      </Box >
    </>
  )
}

export default Header

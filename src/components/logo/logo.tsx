import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link';


const Logo: FC = () => {
  return (
    <Box
    >
      <Link href='/' legacyBehavior>
        <a style={{ textDecoration: 'none' }}>
          <Typography
            variant="logo"
            sx={{
              fontSize: { xs: 24, sm: 25, md: 40 }
            }}
          >
            MARWIN
          </Typography>
        </a>
      </Link>
    </Box>
  )
}

export default Logo

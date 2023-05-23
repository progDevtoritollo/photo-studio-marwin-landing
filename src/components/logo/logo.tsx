import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

const Logo: FC = () => {
  return (
    <Box
    >
      <Typography
        variant="logo"
        sx={{
          fontSize: { xs: 24, sm: 25, md: 40 }
        }}
      >
        MARWIN
      </Typography>
    </Box>
  )
}

export default Logo

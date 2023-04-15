import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

const Logo: FC = () => {
  return (
    <Box
      sx={{
        mr: { xs: 3, md: 1 },

      }}>
      <Typography
        variant="logo"
      >
        MARWIN
      </Typography>
    </Box>
  )
}

export default Logo

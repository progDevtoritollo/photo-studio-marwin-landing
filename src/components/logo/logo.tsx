import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

const Logo: FC = () => {
  return (
    <Box
      sx={{
        mr: { xs: 3, md: 26 },
      }}><Typography
        variant="logo"
      >
        MARWIN
      </Typography>
    </Box>
  )
}

export default Logo

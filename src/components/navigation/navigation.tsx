import React, { FC } from 'react'
import { Box, Typography, Divider } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'

import { navigations } from './navigation.data'

const Navigation: FC = () => {
  return (
    <Box><Box sx={{
      display: 'flex', flexDirection: { xs: 'column', md: 'row' }
    }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            // textDecoration: 'underline',
            px: { xs: 0, md: 3 },
            mb: { xs: 0.2, md: 1 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'primary.main',
            }),

            '& > div': { display: 'none' },

            '&.current>div': { display: 'block' },

            '&:hover': {
              color: 'primary.main',
              '&>div': {
                display: 'block',
              },
            },
          }}
        >
          <Typography variant='Heading4'> {label}</Typography>
        </Box>
      ))}

    </Box><Divider sx={{ border: '1px solid #7D94AF' }} /></Box>

  )
}

export default Navigation

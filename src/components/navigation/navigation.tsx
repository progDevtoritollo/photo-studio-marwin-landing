import React, { FC } from 'react'
import { Box, Typography, Divider, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll'

import { navigations } from './navigation.data'

const Navigation: FC = () => {
  const isMobile = useMediaQuery('(max-width:1250px)');

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    isMobile ? (
      <Box sx={{
        display: 'flex', justifyContent: 'space-between',
      }}>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {navigations.map(({ path: destination, label }) => {
            return (
              <MenuItem onClick={handleClose} >
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
                    fontWeight: 300,
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
              </MenuItem>)
          })}
        </Menu>
      </Box >

    ) : (< Box >
      <Box sx={{
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

      </Box><Divider sx={{ border: '1px solid #7D94AF' }} /></Box >)
  )
}

export default Navigation

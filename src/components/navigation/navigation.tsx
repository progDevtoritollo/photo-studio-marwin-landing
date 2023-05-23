import React, { FC, useState } from 'react'
import { Box, Typography, Divider, useMediaQuery, Button, SwipeableDrawer } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'

import { navigations } from './navigation.data'
import type { Navigation } from '@/interfaces/navigation'
import { Logo } from '../logo';
import { Contacts } from '../contacts';
import Messenger from '../messengers/messengers';
import theme from '@/config/theme';

const Navigation: FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setIsOpen(event.currentTarget);
  // };
  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsOpen(!isOpen);
    };

  const list = (navigations: Navigation[]) => {
    return <Box
      sx={{
        width: { xs: '100vw', sm: '90vw', md: '50vw' },
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{
        width: '100%',
        px: 1.6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 2.4,
      }}>
        <Logo />
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Typography variant="Paragraph1_light" sx={{
            fontSize: { xs: 13.5, sm: 23, },
            textTransform: 'uppercase', pr: 1
          }}>
            Close
          </Typography>
          <CloseIcon />
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {navigations.map(({ path: destination, label }) => {
          return (
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
          )
        })
        }</Box>
      <Box sx={{
        display: 'flex',
        width: '100%',
        justifyContent: "space-between",
        px: 1,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: { xs: 130, sm: 220 },
        }}>
          <Contacts />
          <Messenger />
        </Box>
        <Image src='/images/map.jpg' alt="map" width={170} height={115} />
      </Box>
    </Box >

  }

  return (
    isMobile ? (
      <Box sx={{
        display: 'flex', justifyContent: 'space-between',
      }}>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor={'right'}
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list(navigations)}
        </SwipeableDrawer>
      </Box >

    ) : (
      < Box sx={{
        minWidth: { xs: '230px', sm: '300px', md: '400px', lg: '500px', },
        pr: 1,
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
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
              <Typography variant='Heading4' sx={{
                fontSize: { xs: 10, sm: 12, md: 15, lg: 20 }
              }}> {label}</Typography>
            </Box>
          ))}

        </Box><Divider sx={{ border: '1px solid #7D94AF' }} /></Box >)
  )
}

export default Navigation

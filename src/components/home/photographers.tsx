import React, { FC } from 'react'
import { Typography, useMediaQuery, Box } from '@mui/material'

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
// import { Link as ScrollLink } from 'react-scroll'


import { Card } from '../card'
import { CardData } from '@/interfaces/card-exp'


const content: Array<CardData> = [
  {
    title: 'Corey Stone',
    text: 'The best travel photographer who captured all the happy moments',
    image: "/images/photographers/photographer_1.png",
  },
  {
    title: 'Christopher Garcia',
    text: 'A photographer who creates the magic of portrait photography in a short time',
    image: "/images/photographers/photographer_2.png",
  },
  {
    title: 'Emma Barrett',
    text: 'A photographer who can turn anyone into a magazine cover model',
    image: "/images/photographers/photographer_3.png",
  },
]


const HomeAlbums: FC = () => {
  const delNavBtn = !useMediaQuery('(max-width:780px)');

  const styles = {
    container: {
      width: '600px'
    },
    mySwiper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <Box id="photographers" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mx: { md: 30 },
      pb: 15
    }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="Heading2" sx={{ fontSize: { xs: 27, sm: 40, md: 52 } }}>
          Photographers
        </Typography>
      </Box>
      <Box style={styles.container} sx={{
        minWidth: '0px',
        mb: 5,
        maxWidth: {
          xs: '315px',
          sm: '410px',
          md: '590px',

        },
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Swiper navigation={delNavBtn} loop={true} modules={[Navigation, Pagination]} pagination={true} style={styles.mySwiper}
        >
          {content.map((item) => {
            return (
              <SwiperSlide>
                <Box sx={{
                  ml: { xs: 3.3, sm: 7.5, md: 13.7 },
                  mb: 5
                }}>
                  <Card item={item} />
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </Box >
  )
}

export default HomeAlbums
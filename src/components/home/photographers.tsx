import React, { FC } from 'react'
import { Typography, Container, Grid, Box } from '@mui/material'

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
  ///
  {
    title: 'Emma Barrett',
    text: 'A photographer who can turn anyone into a magazine cover model',
    image: "/images/photographers/photographer_3.png",
  }, {
    title: 'Emma Barrett',
    text: 'A photographer who can turn anyone into a magazine cover model',
    image: "/images/photographers/photographer_3.png",
  }, {
    title: 'Emma Barrett',
    text: 'A photographer who can turn anyone into a magazine cover model',
    image: "/images/photographers/photographer_3.png",
  }, {
    title: 'Emma Barrett',
    text: 'A photographer who can turn anyone into a magazine cover model',
    image: "/images/photographers/photographer_3.png",
  },
]


const HomeAlbums: FC = () => {

  return (
    <Box id="photographers" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mx: { md: 30 },
      pb: 15
    }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="Heading2">
          Photographers
        </Typography>
      </Box>
      <Box sx={{
        minWidth: '0px',
        mb: 5,
        maxWidth: '70vh',
        alignItems: 'center',
      }}>
        <Swiper navigation={true} loop={true} modules={[Navigation, Pagination]} pagination={true} className="mySwiper"
        >
          {content.map((item) => {
            return (

              <SwiperSlide>
                <Box sx={{
                  ml: 15,
                  mb: 5
                }}>
                  <Card item={item} />
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </Box>
  )
}

export default HomeAlbums
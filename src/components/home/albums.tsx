import React, { FC } from 'react'
import { Typography, Grid, Box } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'

import { Container } from '@/components/layout'
import { Button } from '../button'
import { Card } from '../card'
import { CardData } from '@/interfaces/card-exp'


const content: Array<CardData> = [
  {
    title: 'Portrait',
    text: 'An artistic expression realizes itself through a compositional form. It is specific to art',
    image: "/images/albums/albums_card_1.png",
  }, {
    title: 'Love story',
    text: 'The story of the meeting of lovers and the creation of the saga of the union of two hearts',
    image: "/images/albums/albums_card_2.png",
  }, {
    title: 'Wedding',
    text: 'Artistic depiction of the event of the reunion of two hearts in love by marriage',
    image: "/images/albums/albums_card_3.png",
  }, {
    title: 'Pregnant',
    text: 'The ability to save in photos all your love, tenderness and warmth for the unborn baby',
    image: "/images/albums/albums_card_4.png",
  }, {
    title: 'Family',
    text: 'Reflection of your individuality and wonderful moments of family life',
    image: "/images/albums/albums_card_5.png",
  }, {
    title: 'Children',
    text: 'A unique form of communication with children of any age',
    image: "/images/albums/albums_card_6.png",
  },

]

const HomeAlbums: FC = () => {
  return (
    <Container >
      <Box id="albums" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="Heading2" >
            Albums
          </Typography>
        </Box>
        <Grid sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          p: 0,
        }} container spacing={2}>
          {content.map((item) => {
            return (
              <Grid key={item.text} item xs={12} sm={7} md={5} lg={4}>
                <Grid container justifyContent="center">
                  <Card item={item} />
                </Grid>
              </Grid>)
          })}
        </Grid>
        <Button />
      </Box>
    </Container >
  )
}

export default HomeAlbums
import React, { FC } from 'react'
import { Typography, Container, Grid, Box } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'
import { Button } from '../button'



interface Exp {
  title: string
  text: string
  image: string
}

interface ExpItemProps {
  item: Exp,
}

const content: Array<Exp> = [
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

const Card: FC<ExpItemProps> = ({ item }) => {
  const { image, text, title } = item

  return (
    <Box sx={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '370px',
      minHeight: '401px',
      justifyContent: 'flex-end',

    }}>
      <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: '0px 0px 15px 15px',
        p: { md: 1 }
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} >
          <Typography variant="Heading4">
            {title}
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          ml: 3, mr: { xs: 0, md: 4 }
        }} >
          <Typography variant="Paragraph2">
            {text}
          </Typography>
        </Box>
      </Box>

    </Box >
  )
}

const HomeAlbums: FC = () => {
  return (
    <Box id="albums" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mx: { md: 30 },
      pb: 15
    }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="Heading2">
          Albums
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {content.map((item) => {
          return (
            <Grid key={item.text} item xs={10} sm={8} md={4}>
              <Card item={item} />
            </Grid>
          )
        })}
      </Grid>
      <Button>I want a photo</Button>
    </Box>
  )
}

export default HomeAlbums
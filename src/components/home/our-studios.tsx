import React, { FC } from 'react'
import { Typography, Container, Grid, Box } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'


interface Exp {
  text: string
  image: string
}

interface ExpItemProps {
  item: Exp,
  id: number
}

const content: Array<Exp> = [
  {
    text: 'This location is a space, usually rectangular, with a flat, solid background that can be any color. This is the place to create clean, minimalist images that can be used for a variety of purposes.',
    image: "/images/our-studios/our_studio_1.png",
  },
  {
    text: 'This location was created to create light, airy and tender photos. The bed is located in the center of the studio and is upholstered in white linen, which creates a clean and bright environment. The walls and floor of the studio are also white, which adds light and openness to the interior space.',
    image: "/images/our-studios/our_studio_2.png",
  },
  {
    text: 'This location was created to create atmospheric, mystical and mysterious photographs.The sofa is located in the center of the studio and is upholstered in dark fabrics, which creates a feeling of comfort and mystery. The walls and floor of the studio are also in dark colors, which adds gloom and mystery to the atmosphere.',
    image: "/images/our-studios/our_studio_3.png",
  },
]

const ContentSlices: FC<ExpItemProps> = ({ item, id }) => {
  const { image, text } = item
  const sideСondition = id % 2 === 0;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: sideСondition ? 'row-reverse' : 'row',
    }}>
      <Box sx={{ m: { xs: 2, mb: 3 } }} >
        <Image src={image} alt="studios photo" width={570} height={400} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 3, mr: { xs: 0, md: 4 } }} >
        <Typography variant="Paragraph1_light">
          {text}
        </Typography>
      </Box>
    </Box >
  )
}

const HomeOurStudios: FC = () => {
  return (
    <Box id="our-studios" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mx: { md: 30 },
      py: 12
    }}>
      <Box id="our-studios" sx={{
        mb: 5
      }}><Typography variant="Heading2">
          Our studios
        </Typography>
      </Box>

      <Box id="our-studios" >
        <Grid container spacing={0.5}>
          {content.map((item, id) => {
            return (
              <Grid key={item.text} item xs={3} md={12}>
                <ContentSlices item={item} id={id} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default HomeOurStudios
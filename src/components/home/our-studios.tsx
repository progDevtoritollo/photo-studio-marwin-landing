import React, { FC } from 'react'
import { Typography, useMediaQuery, Grid, Box } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'
import { Container } from '@/components/layout';


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
  const isMobile = useMediaQuery('(max-width:960px)');

  const { image, text } = item
  const sideСondition = id % 2 === 0;

  return (

    <Grid key={item.text} item xs={1} md={12} >
      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : sideСondition ? 'row-reverse' : 'row',
        alignItems: 'center',
      }}>
        <Box
          sx={{
            m: { xs: 2, mb: 3 },
            width: { xs: '100%', sm: '65%', md: '200%', lg: "265%", xl: '500%' },
          }}
        >
          <Image
            src={image}
            alt="studios photo"
            width={570}
            height={400}
            unoptimized={true}
            layout='intrinsic'
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', pl: 3, pr: { xs: 0, sm: 2, md: 4 } }} >
          <Typography variant="Paragraph1_light" sx={{ fontSize: { xs: 16, sm: 16, md: 25 } }}>
            {text}
          </Typography>
        </Box>
      </Box >
    </Grid >
  )
}

const HomeOurStudios: FC = () => {
  const isMobile = useMediaQuery('(max-width:960px)');

  return (
    <Container >
      <Box id="studios" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box sx={{
          mb: { xs: 1, sm: 2, md: 3.5 },
        }}><Typography variant="Heading2" sx={{ fontSize: { xs: 40, sm: 54, mb: 60 } }}>
            Our studios
          </Typography>
        </Box>

        <Box  >
          <Grid container direction={isMobile ? 'column' : 'row'}
            spacing={2}  >
            {content.map((item, id) => {
              return (
                <ContentSlices item={item} id={id} />
              )
            })}
          </Grid>
        </Box>
      </Box >
    </Container>

  )
}

export default HomeOurStudios
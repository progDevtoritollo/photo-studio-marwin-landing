import React, { FC } from 'react'
import { Typography, Box } from '@mui/material'

import { CardData } from '@/interfaces/card-exp'

export interface CardItemProps {
  item: CardData,
}

const Card: FC<CardItemProps> = ({ item }) => {
  const { image, text, title } = item

  return (
    <Box sx={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: { xs: '240px', sm: '270px', md: '320px' },
      minHeight: { xs: '360px', sm: '420px', md: '430px' },
      justifyContent: 'flex-end',
      borderRadius: '15px 15px 15px 15px',
    }}>
      <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: '0px 0px 15px 15px',
        p: 1,
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
          mx: 3
        }} >
          <Typography variant="Paragraph2" sx={{ fontSize: { xs: 12, sm: 14, md: 18 } }}>
            {text}
          </Typography>
        </Box>
      </Box>

    </Box >
  )
}

export default Card
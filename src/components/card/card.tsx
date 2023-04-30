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
      width: '370px',
      minHeight: '540px',
      justifyContent: 'flex-end',
      borderRadius: '0px 0px 15px 15px',
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

export default Card
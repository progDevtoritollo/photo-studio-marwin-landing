import React from 'react'
import Head from 'next/head';
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Typography, Box } from '@mui/material';


const OrderPhoto: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Order Photo</title>
        <meta name="description" content="This is my page description" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <div className="routing">
        <Typography>main page</Typography>
        <Typography>-</Typography>
        <Typography>registration for a photo session</Typography>
      </div>
      <Typography>Registration for a photo session</Typography>
      <Box>
        <Typography> Our contacts</Typography>
      </Box>
      <Box>
        <Typography>Enter your details here</Typography>
      </Box>
    </>
  )
}

OrderPhoto.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default OrderPhoto

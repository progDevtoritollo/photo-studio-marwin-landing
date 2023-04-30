import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head';
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Divider, Typography } from '@mui/material';

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeOurStudios = dynamic(() => import('../components/home/our-studios'))
const DynamicHomeAlbums = dynamic(() => import('../components/home/albums'))
const DynamicHomePhotographers = dynamic(() => import('../components/home/photographers'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is my page description" />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <DynamicHomeHero />
      <DynamicHomeOurStudios />
      <DynamicHomeAlbums />
      <DynamicHomePhotographers />

    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home

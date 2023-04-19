import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head';
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Divider, Typography } from '@mui/material';


// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const HomeOurStudios = dynamic(() => import('../components/home/our-studios'))
// const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
// const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
// const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
// const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

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
      <HomeOurStudios />
      <Typography
        variant="Heading1"
      >
        Heading - 1 light 58px
      </Typography>
      <Divider />
      <Typography
        variant="Heading2"
      >
        Heading - 2 light 48px
      </Typography>
      <Divider />
      <Typography
        variant="Heading3"
      >
        Heading - 3 light 30px
      </Typography>
      <Divider />
      <Typography
        variant="Heading4"
      >
        Heading - 4 light 25px
      </Typography>
      <Divider />
      <Typography
        variant="Heading4"
      >
        Heading4_with_line
      </Typography>
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home

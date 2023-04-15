import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Divider, Typography } from '@mui/material';


// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

// const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
// const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
// const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
// const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
// const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
// const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h3>List of imported sections</h3>
      {/* 1.tag line 
          2. studios container 
          3. Albums
          4.Photographers
      */}
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

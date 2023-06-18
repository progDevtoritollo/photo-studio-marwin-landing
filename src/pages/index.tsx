import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head';
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { useRouter } from 'next/router';

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeOurStudios = dynamic(() => import('../components/home/our-studios'))
const DynamicHomeAlbums = dynamic(() => import('../components/home/albums'))
const DynamicHomePhotographers = dynamic(() => import('../components/home/photographers'))

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const hash = window.location.hash;

  //     if (hash) {
  //       const scrollToHash = () => {
  //         animateScroll.scrollTo(hash.substring(1));
  //       };
  //       const timer = setTimeout(scrollToHash, 500);
  //       return () => clearTimeout(timer);
  //     }
  //   }
  // }, []);


  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        animateScroll.scrollTo(hash.substring(1), {
          duration: 500, // Установка времени прокрутки в миллисекундах
          smooth: true, // Включение плавной прокрутки
          ignoreCancelEvents: true, // Игнорирование событий отмены прокрутки
        });
      }
    };

    if (router.asPath === '/') {
      // Прокрутка только на главной странице
      scrollToHash();
    }
  }, [router.asPath]);

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

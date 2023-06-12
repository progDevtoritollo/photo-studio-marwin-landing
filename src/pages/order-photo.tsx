import React, { FC } from 'react'
import Head from 'next/head';
import { Typography, Box, useMediaQuery, Avatar, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Form } from '@/components/form';


let manager = [
  { id: 0, photo: '/images/managers_avatar/Manager1.png', name: 'Chanel Johns', phone: '+380 93 365 12 56' },
  { id: 1, photo: '/images/managers_avatar/Manager2.png', name: 'Elli Chapman', phone: '+380 50 395 18 92' }
]
interface ManagerProps {
  id: number,
  photo: string,
  name: string,
  phone: string,
}

const Arrow: FC = () => {
  return (
    <Box sx={{ mt: 0.5, mx: 0.5 }}> <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" y1="-0.5" x2="8.40371" y2="-0.5" transform="matrix(0.72403 0.689768 -0.647752 0.761851 0 1.5)" stroke="black" strokeLinecap="round" />
      <line x1="0.5" y1="-0.5" x2="8.43038" y2="-0.5" transform="matrix(0.686724 -0.726919 0.686724 0.726919 0.867188 13.5)" stroke="black" strokeLinecap="round" />
    </svg></Box>
  )
}

const Manager: FC<ManagerProps> = ({ id, photo, name, phone }) => {
  const theme = useTheme();
  const textGrayColor = (theme.palette.text as any).text_light_gray;

  const font_size = '15px';
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 1.5 }}>
      <Box>
        <Avatar sx={{ width: 70, height: 70 }} alt="Manager avatar" src={photo} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', ml: 3 }}>
        <Typography variant='Heading5' style={{ color: textGrayColor, fontSize: font_size, lineHeight: 1 }}>Manager {++id}</Typography>
        <Typography variant='Heading5_bolt' >{name}</Typography>
        <Typography style={{ lineHeight: 2 }} variant='Heading5'>{phone}</Typography>
      </Box>
    </Box>)
}

const OrderPhoto: NextPageWithLayout = () => {
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    <>
      <Head>
        <title>Order Photo</title>
        <meta name="description" content="This is my page description" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Box sx={{ minHeight: 'calc(100vh - 372px);' }}>
        <Divider sx={{ border: '1px solid #7D94AF' }} />
        {isMobile ? null : (<Box sx={{ display: 'flex', alignItems: 'center', ml: { sm: 5, md: 13 }, mt: 2 }}>
          <Typography>main page</Typography>
          <Arrow />
          <Typography >Registration for a photo session</Typography>
        </Box>)}
        <Typography variant='Heading2' sx={{ display: 'flex', justifyContent: 'center', mt: 3, fontSize: { xs: 24, sm: 35, md: 40, lg: 45 } }}>
          Registration for a photo session</Typography>
        <Box sx={{
          display: 'flex', flexDirection: 'row',
          justifyContent: 'space-evenly',
          mt: 3.4
        }}>
          {isMobile ? null : (
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='Heading4' sx={{ display: 'flex', justifyContent: 'center', mb: 3.5 }}>Our contacts</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', mr: { sm: 2, md: 7, lg: 11, xl: 13 }, justifyContent: 'center' }}>
                    <Typography variant='Heading5'>651 Ramiro Track Apt. 085</Typography>
                    <Typography variant='Heading5'>+380 93 365 12 56</Typography>
                    <Typography variant='Heading5'>+380 50 395 18 92 </Typography>
                    <Typography variant='Heading5'>okuneva.micah@yahoo.com </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>{manager.map(({ id, photo, name, phone }) => {
                    return (
                      <Manager key={id} id={id} name={name} phone={phone} photo={photo} />
                    )
                  })}</Box>
                </Box>
              </Box>
            </Box>)}

          <Box>
            <Typography sx={{ display: 'flex', justifyContent: 'center', mb: 3.5, minWidth: 50, fontSize: { xs: 18, sm: 25 } }} variant='Heading4'>Enter your details here</Typography>
            <Box><Form /></Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

OrderPhoto.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default OrderPhoto

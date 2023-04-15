import React, { FC } from 'react'
import { Box, Typography } from '@mui/material';
import Image from 'next/image'

import { Logo } from '@/components/logo';
import map from '@/image/map.jpg'
import { Messengers } from '@/components/messengers'

const Footer: FC = () => {
	return (
		<>
			<Box sx={{
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: ' space-evenly',
				backgroundColor: '#A5BCDA',
				height: '260px',
				pt: { xs: 0, md: 4 }
			}}>
				<Box sx={{
					mr: { xs: 2, md: 5 },
				}} >
					<Logo />
					<Image src={map} alt="map" width={170} height={115} />
				</Box>
				<Box sx={{
					display: 'flex', flexDirection: 'column',
					mr: { xs: 2, md: 20 },
				}}>
					<Typography variant='Heading4_with_line'>Contacts</Typography>
					<Box sx={{
						display: 'flex', flexDirection: 'column',
						mt: { xs: 2, md: 1 }, mb: { xs: 2, md: 1 },
					}}><Typography variant='Paragraph1_regular'>+380 93 365 12 56
						</Typography>
						<Typography variant='Paragraph1_regular'>+380 50 395 18 92
						</Typography>
					</Box>
					<Messengers />
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column', mr: { xs: 2, md: 5 }, }}>
					<Typography variant='Heading4_with_line'>Working hours</Typography>
					<Box sx={{
						display: 'flex', flexDirection: 'column',
						mt: { xs: 2, md: 1 },
						mb: { xs: 2, md: 1 },
					}}>
						<Typography variant='Paragraph1_regular'>
							Monday - Friday from 10:00 to 22:00
						</Typography>
						<Typography variant='Paragraph1_regular'> Saturday - Sunday from 10:00 to 23:00 </Typography></Box>
				</Box>
			</Box >
		</>
	)
}

export default Footer

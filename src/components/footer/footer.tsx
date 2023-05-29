import React, { FC } from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image'

import { Logo } from '@/components/logo';
import { Messengers } from '@/components/messengers'
import { Contacts } from '../contacts';

const Footer: FC = () => {
	const isMobile = useMediaQuery('(max-width:1250px)');

	return (
		<>
			<Box id='about-us' sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: ' space-evenly',
				backgroundColor: '#A5BCDA',
				// height: '260px',
				py: { xs: 1, md: 2 },
				alignItem: 'flex-start',
			}}>
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-around',
					width: '100%',
				}}>
					{isMobile ? (null) : (
						<Box sx={{
							mr: { xs: 2, md: 5 },
						}} >
							<Logo />
							<Image src='/images/map.jpg' alt="map" width={170} height={115} />
						</Box>)}
					<Contacts />
					<Box sx={{ display: 'flex', flexDirection: 'column', mr: { xs: 2, md: 5 }, }}>
						<Typography variant='Heading4_with_line' sx={{
							fontSize: { xs: 13, sm: 23, }
						}} >Working hours</Typography>
						<Box sx={{
							display: 'flex', flexDirection: 'column', pb: { xs: 1, md: 1 },
						}}>
							<Typography variant='Paragraph1_regular' sx={{
								fontSize: { xs: 13, sm: 23, },
							}}>
								Monday - Friday from 10:00 to 22:00
							</Typography>
							<Typography variant='Paragraph1_regular' sx={{
								fontSize: { xs: 13, sm: 23, },
							}}> Saturday - Sunday from 10:00 to 23:00 </Typography>
						</Box>
					</Box>
				</Box>
			</Box >
		</>
	)
}

export default Footer

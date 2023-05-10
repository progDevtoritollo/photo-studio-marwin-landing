import React, { FC } from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image'

import { Logo } from '@/components/logo';
import { Messengers } from '@/components/messengers'

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
				pt: { xs: 2, md: 4 }
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

					<Box sx={{
						display: 'flex', flexDirection: 'column',
						// mr: { xs: 2, md: 20 },
					}}>
						<Typography variant='Heading4_with_line' sx={{
							fontSize: { xs: 14, sm: 23, }
						}} > Contacts</Typography>
						<Box sx={{
							display: 'flex', flexDirection: 'column',
							mt: { xs: 2, md: 1 }, mb: { xs: 2, md: 1 },
						}}>
							<Typography variant='Paragraph1_regular'
								sx={{
									fontSize: { xs: 14, sm: 23, },
								}}>+380 93 365 12 56
							</Typography>
							<Typography variant='Paragraph1_regular' sx={{
								fontSize: { xs: 14, sm: 23, },
							}}>+380 50 395 18 92
							</Typography>
						</Box>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', mr: { xs: 2, md: 5 }, }}>
						<Typography variant='Heading4_with_line' sx={{
							fontSize: { xs: 14, sm: 23, },
						}} >Working hours</Typography>
						<Box sx={{
							display: 'flex', flexDirection: 'column',
							mt: { xs: 2, md: 1 },
							mb: { xs: 2, md: 1 },
						}}>
							<Typography variant='Paragraph1_regular' sx={{
								fontSize: { xs: 14, sm: 23, },
							}}>
								Monday - Friday from 10:00 to 22:00
							</Typography>
							<Typography variant='Paragraph1_regular' sx={{
								fontSize: { xs: 14, sm: 23, },
							}}> Saturday - Sunday from 10:00 to 23:00 </Typography>
						</Box>
					</Box>
				</Box>
				<Messengers />
			</Box >
		</>
	)
}

export default Footer

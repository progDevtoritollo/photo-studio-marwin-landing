import React, { FC } from 'react'
import { Typography, Button as MaterialButton } from '@mui/material';

const Button: FC = () => {
	return (
		<>
			<MaterialButton onClick={() => {
				alert('switch to Order photo page ');
			}}
				sx={{
					m: { xs: 2, md: 3 }, ml: { xs: 0, md: 0 }, py: { xs: 1, md: 2 }, px: { xs: 2, md: 4 }, textTransform: 'none', backgroundColor: '#05356D;'
					, '&:hover': { bgcolor: '#177ff3' },
					"&:active": {
						bgcolor: "#a5bcda",
						color: "#177ff3"
					}
				}} variant="contained" >
				<Typography variant='Heading3' sx={{ color: '#FFFFFF' }}>
					I want a photo
				</Typography>
			</MaterialButton>
		</>
	)
}

export default Button

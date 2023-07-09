import React, { FC, useState } from 'react'
import { Typography, Button as MaterialButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';


interface ButtonProps {
	type: string;
	text: string;
	disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ type, text, disabled }) => {
	let isSubmit = false;
	isSubmit = type === 'submit' ? true : false;

	const theme = useTheme();

	const dark_blue = (theme.palette.background as any).dark_blue;
	const Blue_button_pressed = (theme.palette.background as any).Blue_button_pressed
	const White_regular = (theme.palette.text as any).White_regular




	const hover_btn_effect = {
		borderRadius: '8px',
		outline: '3px solid  #8A9AA8',
		background: 'var(--blue-button-and-text-h-1, #05356D)',
		bgcolor: dark_blue
	};

	const active_btn_effect = {
		outline: Blue_button_pressed,
		bgcolor: Blue_button_pressed,
		color: White_regular,
	}

	const disabled_btn_effect = {
		outline: Blue_button_pressed,
		opacity: 0.82,
		color: White_regular,
	}

	return (
		<>
			{isSubmit ? <MaterialButton
				sx={{
					my: { xs: 1, md: 0.5 },
					px: { xs: 2, md: 0.2 },
					py: { xs: 1, md: 1 },
					textTransform: 'none', backgroundColor: '#05356D',
					'&:hover': hover_btn_effect,
					"&:active": active_btn_effect,
					"&:disabled": disabled_btn_effect,
				}}
				disabled={disabled}
				variant="contained" >

				<Typography variant='Paragraph2' sx={{ color: '#ffffff', fontSize: 18, fontWeight: 700, textTransform: 'none', }}>
					{text}
				</Typography>

			</MaterialButton> :
				<MaterialButton
					href="/order-photo"
					sx={{
						my: { xs: 1, md: 0.5 },
						px: { xs: 2, md: 4.1 },
						py: { xs: 1, md: 1.8 },
						textTransform: 'none', backgroundColor: '#05356D;',
						'&:hover': hover_btn_effect,
						"&:active": active_btn_effect,
					}}
					type={type}
					variant="contained" >
					<Typography variant='Heading3' sx={{
						color: '#FFFFFF',
						fontSize: { xs: 20, sm: 27, md: 35 }
					}}>
						{text}
					</Typography>
				</MaterialButton>}
		</>
	)
}

export default Button

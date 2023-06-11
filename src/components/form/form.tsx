import React, { FC } from 'react'
import { borderColor, styled } from '@mui/system';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useFormik, useFormikContext, FormikValues } from 'formik';

interface InputProps {
	label: string;
	bgcolor: string;
	color: string;
	hover_color: string;
	// formik: Object;
}

const Input: FC<InputProps> = ({ label, bgcolor, color, hover_color }) => {
	const formik = useFormikContext<FormikValues>();

	return (
		<>
			<TextField
				id={label}
				name={label}
				label={
					<Typography variant="Paragraph3" color={color} >
						Phone Number
					</Typography>
				}
				variant="outlined"
				fullWidth
				value={formik.values.phone}
				onChange={formik.handleChange}
				sx={{
					bgcolor: bgcolor,
					borderRadius: 1,
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: bgcolor,
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: hover_color,
					},
				}}
				InputProps={{
					style: { height: 33, },
				}}
				InputLabelProps={{
					sx: { marginTop: '-10px' },
				}}
			/>

			<TextField
				name={label}
				label={label}
				variant="outlined"
				fullWidth
				sx={{
					// px:
					// bgcolor: bgcolor,
					// color: color,
				}}
				InputProps={{
					sx: {
						height: '40px', // Задайте желаемую высоту
						// padding: '5px 10px', // Задайте желаемый отступ (padding)
						// margin: '5px 10px',
						bgcolor: bgcolor,
						color: color,
					},
				}}
			/>
		</>
	)
}

const Form: FC = () => {
	const theme = useTheme();
	const dark_opacity = (theme.palette.text as any).dark_opacity;
	const grey_opacity = (theme.palette.text as any).grey_opacity;
	const lite_blue = (theme.palette.background as any).lite_blue;
	const dark_blue = (theme.palette.background as any).dark_blue;
	// const textGrayColor = (theme.palette.text as any).text_light_gray;


	const formik = useFormik({
		initialValues: {
			name: '',
			phone: '',
			additionalInf: '',
		},
		onSubmit: (values) => {
			// Handle form submission
			alert(values);
		},
	});

	return (
		<form>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
				<form onSubmit={formik.handleSubmit}>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row', pb: 2 },
						}}>
							{/* <Input label='name' bgcolor={lite_blue} color={dark_opacity} hover_color={dark_blue} />
						<Input label='phone' bgcolor={lite_blue} color={dark_opacity} hover_color={dark_blue} /> */}

							<TextField
								id="name"
								name="name"
								label={
									<Typography variant="Paragraph3" color={dark_opacity} >
										Name
									</Typography>
								}
								variant="outlined"
								fullWidth
								value={formik.values.name}
								onChange={formik.handleChange}
								sx={{
									bgcolor: lite_blue,
									borderRadius: 1,
									mr: 3,
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: lite_blue,
									},
									'&:hover .MuiOutlinedInput-notchedOutline': {
										borderColor: dark_blue,
									},
								}}
								InputProps={{
									style: { height: 33, },
								}}
								InputLabelProps={{
									sx: { marginTop: '-10px' },
								}}
							/>
							<TextField
								id="phone"
								name="phone"
								label={
									<Typography variant="Paragraph3" color={dark_opacity} >
										Phone Number
									</Typography>
								}
								variant="outlined"
								fullWidth
								value={formik.values.phone}
								onChange={formik.handleChange}
								sx={{
									bgcolor: lite_blue,
									borderRadius: 1,
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: lite_blue,
									},
									'&:hover .MuiOutlinedInput-notchedOutline': {
										borderColor: dark_blue,
									},
								}}
								InputProps={{
									style: { height: 33, },
								}}
								InputLabelProps={{
									sx: { marginTop: '-10px' },
								}}
							/>
						</Box >
						<TextField
							name="additionalInf"
							label={
								<Typography variant="Paragraph3" color={dark_opacity} >
									Additional details
								</Typography>
							}
							variant="outlined"
							fullWidth
							InputProps={{
								style: { height: 102, }
							}}
							InputLabelProps={{
								sx: { marginTop: '-5px' },
							}}
							sx={{
								mt: 1.5,
								bgcolor: lite_blue,
								borderRadius: 1,
								mr: 3,
								'& .MuiOutlinedInput-notchedOutline': {
									borderColor: lite_blue,
								},
								'&:hover .MuiOutlinedInput-notchedOutline': {
									borderColor: dark_blue,
								},
							}}
						/>
						<Button type="submit" variant="contained" sx={{
							bgcolor: dark_blue, borderRadius: 0.8, px: 4.7, py: 1.2, mt: 1.9, marginLeft: 'auto', '&:hover ': {
								bgcolor: lite_blue,
							},
						}}>
							<Typography variant='Paragraph2' sx={{ color: '#ffffff', fontSize: 18, fontWeight: 700, textTransform: 'none', }}>
								Submit
							</Typography>
						</Button>
					</Box>
				</form>
			</Box >
		</form >
	)
}

export default Form

import React, { FC } from 'react'
import { borderColor, styled } from '@mui/system';
import { Typography, Box, TextField, } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useFormik, useFormikContext, FormikValues } from 'formik';
import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';

import { Button } from '../button';
import OrdersBuilder from '@/api/orders/index'


type FormErrors = {
	name?: string;
	phone?: string;
};

const Form: FC = () => {
	const theme = useTheme();
	const dark_opacity = (theme.palette.text as any).dark_opacity;
	const grey_opacity = (theme.palette.text as any).grey_opacity;
	const lite_blue = (theme.palette.background as any).lite_blue;
	const dark_blue = (theme.palette.background as any).dark_blue;
	// const textGrayColor = (theme.palette.text as any).text_light_gray;

	const handleSubmit = () => {
		mutation.mutate()
	};

	const formik = useFormik({
		initialValues: {
			name: '',
			phone: '',
			additionalInf: '',
		},
		onSubmit: handleSubmit, //handleSubmit
		validateOnMount: true,
		validate: (values) => {
			const errors: FormErrors = {};

			if (!values.name) {
				errors.name = 'Required';
			} else if (!/^[a-zA-Z\s]+$/u.test(values.name)) {
				errors.name = 'Invalid name';
			}

			if (!values.phone) {
				errors.phone = 'Required';
			} else if (!/^\d{10}$/u.test(values.phone)) {
				errors.phone = 'Invalid phone';
			}

			return errors
		},
	});

	const mutation = useMutation('create-order',
		async () => {
			return await OrdersBuilder.createOrderPhoto(formik.values);
		}, {
		onSuccess: () => {
			toast.success('Заявка отправлена')
			console.log('Form submitted successfully!');
		},
		onError: (error) => {
			toast.error("Данные не отправились, повторите попытку позже")
			console.error('Error submitting form:', error);
		},
	});


	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
			<form onSubmit={formik.handleSubmit}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row', pb: 2 },
					}}>

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
								mr: { md: 3 },
								mb: { xs: 1, md: 0 },
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
					{/* <ButtonFromUI type="submit" variant="contained" sx={{
						bgcolor: dark_blue, borderRadius: 0.8, px: 4.7, py: 1.2, mt: 1.9, marginLeft: { xs: "", md: 'auto' }, '&:hover ': {
							bgcolor: lite_blue,
						},
					}}>
						<Typography variant='Paragraph2' sx={{ color: '#ffffff', fontSize: 18, fontWeight: 700, textTransform: 'none', }}>
							{mutation.isLoading ? 'Submitting...' : 'Submit'}
						</Typography>
					</ButtonFromUI> */}

					<Button type="submit" text={mutation.isLoading ? 'Submitting...' : 'Submit'} disabled={!formik.isValid} />
				</Box>
			</form>
		</Box >
	)
}

export default Form

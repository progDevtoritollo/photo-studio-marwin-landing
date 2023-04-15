import { createTheme  } from '@mui/material/styles'

// import typography from './typography'
import paletteBase from './palette-base'
import paletteLight from './palette-light'
import paletteDark from './palette-dark'
import shadows from './shadows'



declare module '@mui/material/styles' {
  interface TypographyVariants {
    logo: React.CSSProperties;
    
    Heading1: React.CSSProperties;
    Heading2: React.CSSProperties;
    Heading3: React.CSSProperties;
    Heading4: React.CSSProperties;
    Heading4_with_line: React.CSSProperties;
    Heading5: React.CSSProperties;

    Paragraph1_light: React.CSSProperties;
    Paragraph1_regular: React.CSSProperties;
    Paragraph2: React.CSSProperties;
    Paragraph3: React.CSSProperties;

  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    logo?: React.CSSProperties;

    Heading1?: React.CSSProperties;
    Heading2?: React.CSSProperties;
    Heading3?: React.CSSProperties;
    Heading4?: React.CSSProperties;
    Heading4_with_line?: React.CSSProperties;
    Heading5?: React.CSSProperties;

    Paragraph1_light?: React.CSSProperties;
    Paragraph1_regular?: React.CSSProperties;
    Paragraph2?: React.CSSProperties;
    Paragraph3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    logo: true;

    Heading1:true;
    Heading2:true
    Heading3:true
    Heading4:true
    Heading4_with_line:true
    Heading5:true

    Paragraph1_light: true
    Paragraph1_regular: true
    Paragraph2:true
    Paragraph3:true


  }
}
  //400 - regular,500 - medium, 700 - bold, 
const theme = createTheme({
  spacing: 10, 
  palette:{ ...paletteBase, ...paletteLight, },
  typography: {
    logo: {
      fontSize: '40px',
      color: '#000000',
      fontFamily: 'Vogue',
      fontStyle: 'normal',
      fontWeight: 500, 
      lineHeight: 36,
    },
    Heading1:{
      color: '#000000',
      fontFamily: 'Dela Gothic One',
      fontStyle: 'normal',
      fontWeight: 400,  
      fontSize: '58px',
      lineHeight: '115%',
    },Heading2:{
      fontSize: '48px',
      color: '#000000',
      fontFamily: 'Corbel',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '58px',
    fontFeatureSettings: '"pnum" on, "lnum" on',

    },Heading3:{
      fontFamily: 'Corbel',
      fontStyle: 'normal',
      fontWeight: 700, //bolt
      fontSize: '30px',
      lineHeight: '36px',
      fontFeatureSettings: '"pnum" on, "lnum" on',
      color: '#000000',
    },
    Heading4:{
      fontFamily: 'Corbel',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '25px',
      lineHeight: '30px',
      fontFeatureSettings: '"pnum" on, "lnum" on',
      color: '#000000',
    },
    Heading4_with_line:{
      fontFamily: 'Corbel',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '25px',
      lineHeight: '30px',
      textDecorationLine: 'underline',
      color: '#000000',
    },
    Heading5:{
      fontFamily: 'Corbel',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '19px',
      color: '#000000',
    },
    Paragraph1_light:{
      fontFamily: 'Corbel',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '25px',
    lineHeight: '30px',
    color: '#000000',
    },
    Paragraph1_regular:{
      fontFamily: 'Corbel',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '25px',
    lineHeight: '30px',
    fontFeatureSettings: "'pnum' on, 'lnum' on",
    color: '#000000',
    },
    Paragraph2:{
      fontFamily: 'Corbel',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '18px',
      lineHeight: '22px',
      color: '#000000',
    },
    Paragraph3:{
      fontFamily: 'Corbel',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#000000',
    },
    fontFamily: [
      'Corbel',
      'Dela Gothic One',
      'Corbel',
    ].join(','),
  },
  shadows,
})



export { paletteBase, paletteLight, paletteDark, /*{typography,}*/ shadows }
export default theme

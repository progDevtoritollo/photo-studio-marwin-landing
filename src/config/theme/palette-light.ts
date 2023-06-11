import { PaletteOptions, TypeText, TypeBackground } from '@mui/material';
import { grey, common } from '@mui/material/colors';


interface CustomPaletteOptions extends PaletteOptions {
  text: TypeText & {
    text_light_gray?: string;
    dark_opacity?: string;
    grey_opacity?: string;
  };
  background: TypeBackground & {
    lite_blue?: string;
    dark_blue?: string;
  };
}

const palette: CustomPaletteOptions = {
  mode: 'light',
  background: {
    default: '#CED9E6',
    paper: common.white,
    dark_blue:'rgba(5, 53, 109, 0.51);',
    lite_blue:'rgba(165, 188, 218, 0.91);'
  },
  text: {
    primary: grey[900],
    secondary: '#717171',
    disabled: grey[500],
    text_light_gray: '#9DA5AF',
    grey_opacity:'#0000003F',
    dark_opacity:'##000000ad'
  },
};

export default palette;
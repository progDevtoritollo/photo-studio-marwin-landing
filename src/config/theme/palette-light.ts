import { PaletteOptions, TypeText } from '@mui/material';
import { grey, common } from '@mui/material/colors';

interface CustomPaletteOptions extends PaletteOptions {
  text: TypeText & {
    text_light_gray?: string;
  };
}

const palette: CustomPaletteOptions = {
  mode: 'light',
  background: {
    default: '#CED9E6',
    paper: common.white,
  },
  text: {
    primary: grey[900],
    secondary: '#717171',
    disabled: grey[500],
    text_light_gray: '#9DA5AF',
  },
};

export default palette;
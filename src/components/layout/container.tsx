import React, { FC, ReactNode } from 'react'
import { Box } from '@mui/material';

interface Props {
  children: ReactNode
}

const Container: FC<Props> = ({ children, ...rest }) => {
  return (
    <Box {...rest} sx={styles.layout}>
      {children}
    </Box>
  );
};

export default Container;

const styles = {
  layout: { maxWidth: '1000px', margin: '0 auto', flex: '1', padding: '3rem 1rem 3rem 1rem' },
};

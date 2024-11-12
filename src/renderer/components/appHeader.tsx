import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import icon from '../../../assets/icon.svg';

function AppHeader() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <img
            src={icon}
            alt="icon"
            width="30"
            height="30"
            style={{ marginRight: '10px' }}
          />
          <Typography variant="h6" noWrap>
            Light Curve Viewer
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;

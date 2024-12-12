import React from 'react';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';
import icon from '../../../assets/icon.svg';

function AppHeader() {
  return (
    <AppBar position="fixed" sx={{ background: 'rgb(80, 80, 80)' }}>
      <Toolbar>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
        >
          <img
            src={icon}
            alt="icon"
            width="50"
            height="50"
            style={{ marginRight: '10px' }}
          />
          <Typography variant="h6" noWrap>
            Light Curve Viewer
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;

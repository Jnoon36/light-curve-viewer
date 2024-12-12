import React from 'react';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';
import styled from '@mui/material/styles/styled';
import icon from '../../../assets/icon.svg';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.lcvGray,
  position: 'fixed',
}));

function AppHeader() {
  return (
    <CustomAppBar data-testid="custom-app-bar">
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
    </CustomAppBar>
  );
}

export default AppHeader;

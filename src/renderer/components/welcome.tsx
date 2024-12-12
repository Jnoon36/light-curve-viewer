import { Box, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function Welcome() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4">Welcome to Light Curve Viewer</Typography>
      <Typography variant="h6" sx={{ marginBottom: '50px' }}>
        Please upload a file to get started
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
          height: '300px',
          border: '2px dashed gray',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: 'rgba(135,206,250, 0.1)',
            cursor: 'pointer',
          },
        }}
      >
        <UploadFileIcon
          sx={{ width: '100px', height: '100px', color: 'gray' }}
        />
        <Typography variant="body2" sx={{ marginTop: '10px' }}>
          Click the icon or drag and drop a file
        </Typography>
        <Typography variant="caption">
          Supported file types: .csv, .fits
        </Typography>
      </Box>
    </Box>
  );
}

export default Welcome;

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';

const Welcome = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 5, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          borderRadius: 2
        }}
      >
        <MapIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Welcome to Territories Builder
        </Typography>
        
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Create, share and navigate to custom territories on interactive maps
        </Typography>
        
        <Box mt={4} display="flex" gap={2}>
          <Button 
            component={Link} 
            to="/login" 
            variant="contained" 
            color="primary" 
            size="large"
          >
            Login
          </Button>
          <Button 
            component={Link} 
            to="/register" 
            variant="outlined" 
            color="primary" 
            size="large"
          >
            Register
          </Button>
        </Box>
        
        <Box mt={6}>
          <Typography variant="body1" paragraph align="center">
            With Territories Builder, you can:
          </Typography>
          <Box component="ul" sx={{ textAlign: 'left' }}>
            <Typography component="li">Draw custom territories using polygons, lines, and circles</Typography>
            <Typography component="li">Generate shareable links for each territory</Typography>
            <Typography component="li">Navigate to territories with precise location guidance</Typography>
            <Typography component="li">Manage your territories in a personalized dashboard</Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Welcome;
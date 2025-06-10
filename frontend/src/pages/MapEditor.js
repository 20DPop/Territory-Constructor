import React, { useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw'; // This should work now
import { Box, Drawer, Typography, TextField, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SaveIcon from '@mui/icons-material/Save';
import { createTerritory } from '../services/api';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const MapEditor = () => {
  const [territory, setTerritory] = useState({
    name: '',
    geometry: null,
    type: '',
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNameChange = (e) => {
    setTerritory({
      ...territory,
      name: e.target.value,
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    
    if (!territory.name || !territory.geometry) {
      setMessage('Please provide a name and draw a territory');
      return;
    }
    
    try {
      // Log what we're sending
      console.log('Sending territory data:', {
        name: territory.name,
        geometry: territory.geometry,
        type: territory.type,
        previewImage: ''
      });
      
      const response = await createTerritory({
        name: territory.name,
        geometry: territory.geometry,
        type: territory.type,
        previewImage: '', 
      });
      
      console.log('Server response:', response.data);
      
      setMessage('Territory saved successfully!');
      setTerritory({
        name: '',
        geometry: null,
        type: '',
      });
      
      // Reset the map
      if (window._editableFG) {
        window._editableFG.clearLayers();
      }
    } catch (error) {
      console.error('Error saving territory:', error);
      
      if (error.response) {
        // The server responded with an error
        console.error('Server error details:', error.response.data);
        setMessage(`Error: ${error.response.data.message || 'Server error'}`);
      } else {
        setMessage('Error connecting to server');
      }
    }
  };

  const handleCreated = (e) => {
    const { layerType, layer } = e;
    
    // Store geometry data
    const geoJSON = layer.toGeoJSON();
    
    setTerritory({
      ...territory,
      geometry: geoJSON.geometry,
      type: layerType,
    });
  };

  return (
    <Box sx={{ position: 'relative', height: 'calc(100vh - 130px)' }}>
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 15, 
          left: 15, 
          zIndex: 1000 
        }}
      >
        <IconButton 
          color="primary" 
          variant="contained" 
          onClick={toggleDrawer}
          sx={{ bgcolor: 'white', boxShadow: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 300, padding: 3 }}
          role="presentation"
        >
          <Typography variant="h6" gutterBottom>Create Territory</Typography>
          
          {message && (
            <Typography 
              color={message.includes('Error') ? 'error' : 'success'} 
              variant="body2" 
              sx={{ mb: 2 }}
            >
              {message}
            </Typography>
          )}
          
          <form onSubmit={handleCreate}>
            <TextField
              fullWidth
              label="Territory Name"
              variant="outlined"
              value={territory.name}
              onChange={handleNameChange}
              margin="normal"
              required
            />
            
            <Typography variant="body2" color="textSecondary" sx={{ my: 2 }}>
              Use the drawing tools on the map to create your territory.
            </Typography>
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              fullWidth
              disabled={!territory.geometry}
            >
              Save Territory
            </Button>
          </form>
        </Box>
      </Drawer>
      
      <MapContainer
        center={[51.505, -0.09]} // Default center
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup
          ref={(ref) => {
            window._editableFG = ref;
          }}
        >
          <EditControl
            position="topright"
            onCreated={handleCreated}
            draw={{
              rectangle: false,
              marker: false,
              circlemarker: false,
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </Box>
  );
};

export default MapEditor;
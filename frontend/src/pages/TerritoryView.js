import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet'; // Add this import
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  CircularProgress, 
  Alert,
  Stack
} from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import DirectionsIcon from '@mui/icons-material/Directions';
import { getTerritoryById } from '../services/api';

// Component to handle map view adjustments
const MapView = ({ geometry }) => {
  const map = useMap();
  
  useEffect(() => {
    if (geometry) {
      // Create a GeoJSON layer for bounds calculation
      const geoJsonLayer = L.geoJSON(geometry);
      const bounds = geoJsonLayer.getBounds();
      
      // Adjust map view to fit the territory
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, geometry]);
  
  return null;
};

// Component to show user location and handle location permissions
const LocationMarker = ({ onLocationFound }) => {
  const [position, setPosition] = useState(null);
  const map = useMap();



  useEffect(() => {
    map.on('locationfound', (e) => {
      setPosition(e.latlng);
      onLocationFound(e.latlng);
    });

    map.on('locationerror', (e) => {
      console.error(e);
    });

    return () => {
      map.off('locationfound');
      map.off('locationerror');
    };
  }, [map, onLocationFound]);

  return position ? (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
};

const TerritoryView = () => {
  const { id } = useParams();
  const [territory, setTerritory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const fetchTerritory = async () => {
      try {
        setLoading(true);
        const { data } = await getTerritoryById(id);
        setTerritory(data);
      } catch (err) {
        setError('Failed to load territory details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTerritory();
  }, [id]);

  const handleLocationFound = (location) => {
    setUserLocation(location);
  };

  const handleGetDirections = () => {
    if (!userLocation || !territory) return;
    
    // Calculate the center point of the territory (simplified)
    let lat, lng;
    
    try {
      console.log("Territory geometry:", territory.geometry);
      
      if (territory.type === 'circle') {
        // For circles, handle both possible formats
        if (Array.isArray(territory.geometry.coordinates)) {
          // If it's an array, use it directly
          [lng, lat] = territory.geometry.coordinates;
        } else {
          // If it's a CircleMarker or a different format
          // You might need to extract from territory.geometry differently
          // For now, use a reasonable default or center of the map
          const center = window._mapInstance.getCenter();
          lat = center.lat;
          lng = center.lng;
        }
      } else if (territory.geometry.type === 'Polygon' || territory.type === 'polygon') {
        // For polygons, use the first coordinate
        const coords = territory.geometry.coordinates[0];
        [lng, lat] = coords[0];
      } else if (territory.geometry.type === 'LineString' || territory.type === 'polyline' || territory.type === 'line') {
        // For lines, use the first coordinate
        const coords = territory.geometry.coordinates;
        [lng, lat] = coords[0];
      } else {
        // For other types, use the first coordinate if available
        if (territory.geometry.coordinates && Array.isArray(territory.geometry.coordinates[0])) {
          [lng, lat] = territory.geometry.coordinates[0];
        } else if (territory.geometry.coordinates) {
          [lng, lat] = territory.geometry.coordinates;
        } else {
          // Fallback to map center
          const center = window._mapInstance.getCenter();
          lat = center.lat;
          lng = center.lng;
        }
      }
      
      // Add debugging
      console.log("Calculated coordinates:", { lat, lng });
      
      // Open in Google Maps
      window.open(`https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${lat},${lng}`);
    } catch (error) {
      console.error("Error calculating directions:", error);
      alert("Sorry, couldn't calculate directions for this territory type");
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="500px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!territory) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="info">Territory not found</Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ height: 'calc(100vh - 130px)' }}>
      <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 1000,
            p: 2,
            minWidth: 200,
            maxWidth: 350
          }}
        >
          <Typography variant="h6" gutterBottom>
            {territory.name}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" paragraph>
            {territory.type.charAt(0).toUpperCase() + territory.type.slice(1)} Territory
          </Typography>
          
          <Stack direction="row" spacing={1}>
            <Button 
              variant="outlined" 
              startIcon={<MyLocationIcon />}
              onClick={() => {
                // Trigger location finding in the map
                if (window._mapInstance) {
                  window._mapInstance.locate({ setView: true });
                }
              }}
            >
              My Location
            </Button>
            
            <Button 
              variant="contained"
              startIcon={<DirectionsIcon />}
              disabled={!userLocation}
              onClick={handleGetDirections}
            >
              Directions
            </Button>
          </Stack>
        </Paper>
        
        <MapContainer
          center={[51.505, -0.09]} // Default center, will be adjusted
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          ref={(ref) => { window._mapInstance = ref; }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {territory.geometry && (
            <>
              <GeoJSON data={territory.geometry} />
              <MapView geometry={territory.geometry} />
            </>
          )}
          
          <LocationMarker onLocationFound={handleLocationFound} />
        </MapContainer>
      </Box>
    </Box>
  );
};

export default TerritoryView;
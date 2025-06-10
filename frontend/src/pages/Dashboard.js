import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  IconButton, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import MapIcon from '@mui/icons-material/Map';
import { getTerritories, deleteTerritory } from '../services/api';

const Dashboard = () => {
  const [territories, setTerritories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [territoryToDelete, setTerritoryToDelete] = useState(null);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [territoryToShare, setTerritoryToShare] = useState(null);

  useEffect(() => {
    const fetchTerritories = async () => {
      try {
        setLoading(true);
        const { data } = await getTerritories();
        setTerritories(data);
        setError(null);
      } catch (err) {
        setError('Failed to load territories. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTerritories();
  }, []);

  const handleDeleteClick = (territory) => {
    setTerritoryToDelete(territory);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (territoryToDelete) {
      try {
        await deleteTerritory(territoryToDelete._id);
        setTerritories(territories.filter(t => t._id !== territoryToDelete._id));
      } catch (err) {
        setError('Failed to delete territory.');
        console.error(err);
      }
    }
    setDeleteDialogOpen(false);
    setTerritoryToDelete(null);
  };

  const handleShareClick = (territory) => {
    setTerritoryToShare(territory);
    setShareDialogOpen(true);
  };

  const handleCopyLink = () => {
    if (territoryToShare) {
      const link = `${window.location.origin}/territory/${territoryToShare._id}`;
      navigator.clipboard.writeText(link);
      setShareDialogOpen(false);
      setTerritoryToShare(null);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="500px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" component="h1">
          My Territories
        </Typography>
        
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/map" 
          startIcon={<MapIcon />}
        >
          Create New Territory
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {territories.length === 0 ? (
        <Box 
          sx={{ 
            bgcolor: 'background.paper', 
            p: 4, 
            borderRadius: 2, 
            textAlign: 'center' 
          }}
        >
          <Typography variant="h6" gutterBottom>
            No territories created yet
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Create your first territory by clicking the button above
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {territories.map((territory) => (
            <Grid item xs={12} sm={6} md={4} key={territory._id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: 140,
                    bgcolor: 'grey.200',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {territory.previewImage ? (
                    <img 
                      src={territory.previewImage} 
                      alt={territory.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <MapIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                  )}
                </CardMedia>
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {territory.name}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    Type: {territory.type}
                  </Typography>
                  
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Button 
                      size="small" 
                      component={Link} 
                      to={`/territory/${territory._id}`}
                    >
                      View
                    </Button>
                    
                    <Box>
                      <IconButton 
                        aria-label="share" 
                        size="small"
                        onClick={() => handleShareClick(territory)}
                      >
                        <ShareIcon fontSize="small" />
                      </IconButton>
                      
                      <IconButton 
                        aria-label="delete" 
                        size="small" 
                        color="error"
                        onClick={() => handleDeleteClick(territory)}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Territory</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete "{territoryToDelete?.name}"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error">Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Share Dialog */}
      <Dialog
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
      >
        <DialogTitle>Share Territory</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Copy this link to share your territory "{territoryToShare?.name}":
          </DialogContentText>
          <Box 
            sx={{ 
              bgcolor: 'background.paper', 
              p: 2, 
              mt: 2, 
              borderRadius: 1,
              fontFamily: 'monospace',
              fontSize: 14,
              overflow: 'auto'
            }}
          >
            {territoryToShare && `${window.location.origin}/territory/${territoryToShare._id}`}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShareDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleCopyLink}>Copy Link</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Dashboard;
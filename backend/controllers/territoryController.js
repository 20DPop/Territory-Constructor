const Territory = require('../models/Territory');

// @desc    Create new territory
// @route   POST /api/territories
// @access  Private
const createTerritory = async (req, res) => {
  try {
    const { name, geometry, type, previewImage } = req.body;
    
    // Log the received data for debugging
    console.log('Creating territory with data:', {
      name, 
      geometryType: geometry ? geometry.type : 'undefined',
      type,
      userId: req.user ? req.user._id : 'undefined'
    });

    // Handle type conversion if needed
    let territoryType = type;
    if (type === 'polyline') territoryType = 'line';
    
    const territory = await Territory.create({
      name,
      geometry,
      type: territoryType,
      previewImage: previewImage || '',
      user: req.user._id
    });

    res.status(201).json(territory);
  } catch (error) {
    console.error('Territory creation error:', error);
    
    // Send detailed error information
    res.status(500).json({ 
      message: error.message,
      name: error.name,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
  }
};

// @desc    Get all territories for a user
// @route   GET /api/territories
// @access  Private
const getTerritories = async (req, res) => {
  try {
    const territories = await Territory.find({ user: req.user._id });
    res.json(territories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get territory by ID
// @route   GET /api/territories/:id
// @access  Public
const getTerritoryById = async (req, res) => {
  try {
    const territory = await Territory.findById(req.params.id);
    
    if (!territory) {
      return res.status(404).json({ message: 'Territory not found' });
    }
    
    res.json(territory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update territory
// @route   PUT /api/territories/:id
// @access  Private
const updateTerritory = async (req, res) => {
  try {
    const territory = await Territory.findById(req.params.id);
    
    if (!territory) {
      return res.status(404).json({ message: 'Territory not found' });
    }
    
    // Check if territory belongs to user
    if (territory.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this territory' });
    }
    
    const updatedTerritory = await Territory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.json(updatedTerritory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete territory
// @route   DELETE /api/territories/:id
// @access  Private
const deleteTerritory = async (req, res) => {
  try {
    const territory = await Territory.findById(req.params.id);
    
    if (!territory) {
      return res.status(404).json({ message: 'Territory not found' });
    }
    
    // Check if territory belongs to user
    if (territory.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this territory' });
    }
    
    await Territory.findByIdAndDelete(req.params.id);
    
    res.json({ message: 'Territory removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTerritory,
  getTerritories,
  getTerritoryById,
  updateTerritory,
  deleteTerritory
};
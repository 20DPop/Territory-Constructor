const mongoose = require('mongoose');

const territorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a territory name']
    },
    geometry: {
      type: Object,
      required: [true, 'Please add territory geometry']
    },
    type: {
      type: String,
      required: true,
      enum: ['polygon', 'circle', 'line', 'polyline', 'rectangle', 'marker']
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    previewImage: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Territory', territorySchema);